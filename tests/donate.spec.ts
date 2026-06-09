import { test, expect } from '@playwright/test';

test.describe('Donation Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Log console and error messages from the browser
    page.on('console', msg => console.log(`BROWSER LOG [${msg.type()}]:`, msg.text()));
    page.on('pageerror', err => console.error('BROWSER ERROR:', err.stack || err.message));
    page.on('requestfailed', request => {
      console.error('BROWSER REQUEST FAILED:', request.url(), request.failure()?.errorText);
    });
    page.on('response', response => {
      if (response.status() >= 400) {
        console.error('BROWSER RESPONSE ERROR:', response.status(), response.url());
      }
    });

    // Navigate to the donation page
    await page.goto('http://localhost:3000/donate');
  });

  test('should display donation page elements', async ({ page }) => {
    // Check main title
    await expect(page.locator('h1')).toHaveText('Support the Movement');
    
    // Check form is visible
    const form = page.locator('form[action="https://www.paypal.com/cgi-bin/webscr"]');
    await expect(form).toBeVisible();
  });

  test('should have default currency (USD) and default amount (25) set correctly', async ({ page }) => {
    // Check that USD currency button is selected (has primary styles)
    const usdBtn = page.locator('button:has-text("USD ($)")');
    await expect(usdBtn).toHaveClass(/border-primary-600/);

    // Check that 25 amount button is selected
    const amount25Btn = page.locator('button:has-text("25")').first();
    await expect(amount25Btn).toHaveClass(/bg-neutral-900/);

    // Check number input contains 25
    const amountInput = page.locator('input[type="number"]');
    await expect(amountInput).toHaveValue('25');

    // Check form hidden fields
    const cmdHidden = page.locator('form input[name="cmd"]');
    await expect(cmdHidden).toHaveValue('_donations');

    const businessHidden = page.locator('form input[name="business"]');
    await expect(businessHidden).toHaveValue('nico@streetbiz.co.za');

    const itemHidden = page.locator('form input[name="item_name"]');
    await expect(itemHidden).toHaveValue('Donation to StreetBiz Foundation');

    const currencyHidden = page.locator('form input[name="currency_code"]');
    await expect(currencyHidden).toHaveValue('USD');

    const amountHidden = page.locator('form input[name="amount"]');
    await expect(amountHidden).toHaveValue('25');
  });

  test('should update currency and amount when selecting options', async ({ page }) => {
    // Select EUR
    await page.click('button:has-text("EUR (€)")');
    
    // Check EUR is selected and hidden field is updated
    const eurBtn = page.locator('button:has-text("EUR (€)")');
    await expect(eurBtn).toHaveClass(/border-primary-600/);
    await expect(page.locator('form input[name="currency_code"]')).toHaveValue('EUR');

    // Select amount 100
    await page.click('button:has-text("100")');
    await expect(page.locator('input[type="number"]')).toHaveValue('100');
    await expect(page.locator('form input[name="amount"]')).toHaveValue('100');
  });

  test('should update amount when typing a custom value', async ({ page }) => {
    // Click "Other" button
    await page.click('button:has-text("Other")');
    
    // Check that input is empty or we can type in it
    const amountInput = page.locator('input[type="number"]');
    await amountInput.fill('75.50');

    // Check value is updated in the input and the hidden field
    await expect(amountInput).toHaveValue('75.50');
    await expect(page.locator('form input[name="amount"]')).toHaveValue('75.50');
  });

  test('should submit correct default form data to PayPal', async ({ page }) => {
    // Intercept/wait for request to PayPal
    const [request] = await Promise.all([
      page.waitForRequest(req => req.url().includes('paypal.com')),
      page.click('button:has-text("Donate via PayPal")')
    ]);

    expect(request.method()).toBe('POST');
    const postData = request.postData();
    expect(postData).toContain('cmd=_donations');
    expect(postData).toContain('business=nico%40streetbiz.co.za');
    expect(postData).toContain('item_name=Donation+to+StreetBiz+Foundation');
    expect(postData).toContain('currency_code=USD');
    expect(postData).toContain('amount=25');
  });

  test('should submit custom values to PayPal when modified', async ({ page }) => {
    // Select EUR
    await page.click('button:has-text("EUR (€)")');
    
    // Select 100
    await page.click('button:has-text("100")');

    // Intercept/wait for request to PayPal
    const [request] = await Promise.all([
      page.waitForRequest(req => req.url().includes('paypal.com')),
      page.click('button:has-text("Donate via PayPal")')
    ]);

    expect(request.method()).toBe('POST');
    const postData = request.postData();
    expect(postData).toContain('cmd=_donations');
    expect(postData).toContain('business=nico%40streetbiz.co.za');
    expect(postData).toContain('item_name=Donation+to+StreetBiz+Foundation');
    expect(postData).toContain('currency_code=EUR');
    expect(postData).toContain('amount=100');
  });
});

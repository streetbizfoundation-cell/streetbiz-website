'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'
import { InputProps } from '@/lib/types/components'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            {label}
            {props.required && <span className="text-error-500">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-base text-neutral-900 placeholder-neutral-500',
            'transition-colors duration-200',
            'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
            'disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed',
            error && 'border-error-500 focus:ring-error-500/20',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-error-500">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-neutral-500">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

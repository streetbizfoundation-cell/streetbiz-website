from urllib.request import urlopen
from html.parser import HTMLParser
import re

urls = [
    ('from-ngobozana-to-the-world-a-journey-of-resilience-science-and-service','https://streetbiz.co.za/2025/09/26/from-ngobozana-to-the-world-a-journey-of-resilience-science-and-service/'),
    ('from-richmonds-desert-to-konke','https://streetbiz.co.za/2025/09/25/from-richmonds-desert-to-konke/'),
    ('from-rural-roots-to-grassroots-impact-my-journey-of-young-entrepreneur','https://streetbiz.co.za/2025/09/04/from-rural-roots-to-grassroots-impact-my-journey-of-young-entrepreneur/'),
    ('mamelodi-vegetable-garden','https://streetbiz.co.za/2024/11/17/mamelodi-vegetable-garden/'),
    ('empowering-young-south-africans-with-bafana','https://streetbiz.co.za/2024/11/10/empowering-young-south-africans-with-bafana/'),
    ('from-the-streets-to-dreams-a-journey-of-perseverance-and-purpose','https://streetbiz.co.za/2024/10/02/from-the-streets-to-dreams-a-journey-of-perseverance-and-purpose/')
]

class EntryParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_entry = False
        self.depth = 0
        self.text = []
        self.collect = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'div' and attrs.get('class', '').startswith('entry-content'):
            self.in_entry = True
            self.depth = 1
        elif self.in_entry:
            self.depth += 1
            if tag in ('p','h2','h3','h4','blockquote'):
                self.collect = True
                self.text.append('\n')

    def handle_endtag(self, tag):
        if self.in_entry:
            self.depth -= 1
            if self.depth == 0:
                self.in_entry = False
            if tag in ('p','h2','h3','h4','blockquote'):
                self.collect = False
                self.text.append('\n')

    def handle_data(self, data):
        if self.in_entry and self.collect:
            self.text.append(data)

for slug, url in urls:
    print('---', slug, '---')
    html = urlopen(url).read().decode('utf-8', errors='ignore')
    parser = EntryParser()
    parser.feed(html)
    out = ''.join(parser.text)
    out = re.sub(r'\n[ \t\r\f]+', '\n', out)
    out = re.sub(r'\n{3,}', '\n\n', out).strip()
    print(out)

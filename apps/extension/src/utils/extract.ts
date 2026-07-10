// ========================
// Content Extraction Utilities
// ========================

/**
 * Extract main article content.
 * TODO: Integrate Readability.js for production use.
 */
export function extractArticleContent(): string {
  const selectors = ['article', '[role="main"]', 'main', '.post-content', '.entry-content', '#content'];

  for (const selector of selectors) {
    const el = document.querySelector(selector);
    if (el) return el.textContent?.trim() ?? '';
  }

  return document.body.innerText.slice(0, 10000);
}

/**
 * Extract all links from the page.
 */
export function extractLinks(): { text: string; href: string }[] {
  return Array.from(document.querySelectorAll('a[href]'))
    .map((a) => ({
      text: a.textContent?.trim() ?? '',
      href: (a as HTMLAnchorElement).href,
    }))
    .filter((link) => link.text && link.href.startsWith('http'));
}

/**
 * Extract all headings from the page.
 */
export function extractHeadings(): { level: number; text: string }[] {
  return Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
    .map((h) => ({
      level: parseInt(h.tagName[1]),
      text: h.textContent?.trim() ?? '',
    }))
    .filter((h) => h.text);
}

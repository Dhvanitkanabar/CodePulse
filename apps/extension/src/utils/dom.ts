// ========================
// DOM Utilities
// ========================

/**
 * Get all text content from the page, excluding scripts and styles.
 */
export function getPageText(): string {
  const clone = document.body.cloneNode(true) as HTMLElement;
  clone.querySelectorAll('script, style, noscript').forEach((el) => el.remove());
  return clone.innerText.trim();
}

/**
 * Get metadata from the page.
 */
export function getPageMetadata() {
  return {
    title: document.title,
    url: window.location.href,
    domain: window.location.hostname,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
    keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content') ?? '',
    author: document.querySelector('meta[name="author"]')?.getAttribute('content') ?? '',
    ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? '',
  };
}

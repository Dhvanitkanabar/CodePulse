// ========================
// Content Script
// ========================

/**
 * Content script injected into all pages.
 * Handles DOM interaction, content extraction, and message passing.
 */

// Notify background that content script is loaded
chrome.runtime.sendMessage({ type: 'CONTENT_SCRIPT_LOADED', url: window.location.href });

// Listen for messages from background/popup
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  switch (message.type) {
    case 'EXTRACT_CONTENT': {
      const content = extractPageContent();
      sendResponse({ success: true, data: content });
      break;
    }
    case 'GET_PAGE_INFO': {
      const info = getPageInfo();
      sendResponse({ success: true, data: info });
      break;
    }
    case 'GET_SELECTED_TEXT': {
      const text = window.getSelection()?.toString() ?? '';
      sendResponse({ success: true, data: text });
      break;
    }
    default:
      sendResponse({ success: false, error: 'Unknown message type' });
  }

  return true;
});

/**
 * Extract main content from the page.
 * TODO: Integrate Readability.js for better extraction.
 */
function extractPageContent() {
  return {
    title: document.title,
    url: window.location.href,
    text: document.body.innerText.slice(0, 10000),
    html: document.documentElement.outerHTML.slice(0, 50000),
  };
}

/**
 * Get basic page metadata.
 */
function getPageInfo() {
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;

  return {
    title: document.title,
    url: window.location.href,
    domain: window.location.hostname,
    description: metaDescription?.getAttribute('content') ?? '',
    image: ogImage?.getAttribute('content') ?? '',
    favicon: favicon?.href ?? '',
  };
}

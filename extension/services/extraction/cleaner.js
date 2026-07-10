export const cleanHTML = (doc) => {
    const selectorsToRemove = [
        'script', 'style', 'noscript', 'iframe', 'object', 'embed',
        'nav', 'footer', 'header', 'aside',
        '.ad', '.ads', '.advertisement', '.social-share',
        '#cookie-banner', '.cookie-consent'
    ];
    selectorsToRemove.forEach(selector => {
        doc.querySelectorAll(selector).forEach(el => el.remove());
    });
    return doc;
};

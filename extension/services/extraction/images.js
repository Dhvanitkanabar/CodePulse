export const extractImages = (el) => Array.from(el.querySelectorAll('img')).map(img => ({ src: img.src, alt: img.alt }));

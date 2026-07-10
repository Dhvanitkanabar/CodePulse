export const extractHeadings = (el) => Array.from(el.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({ level: h.tagName, text: h.innerText }));

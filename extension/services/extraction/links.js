export const extractLinks = (el) => Array.from(el.querySelectorAll('a')).map(a => ({ text: a.innerText, href: a.href }));

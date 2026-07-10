export const extractCodeBlocks = (el) => Array.from(el.querySelectorAll('pre, code')).map(code => code.innerText);

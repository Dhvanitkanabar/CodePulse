export const extractTables = (el) => Array.from(el.querySelectorAll('table')).map(table => table.innerText);

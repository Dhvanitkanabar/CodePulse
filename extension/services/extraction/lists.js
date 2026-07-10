export const extractLists = (el) => Array.from(el.querySelectorAll('ul, ol')).map(list => list.innerText);

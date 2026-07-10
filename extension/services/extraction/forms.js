export const extractForms = (el) => Array.from(el.querySelectorAll('form')).map(form => form.action);

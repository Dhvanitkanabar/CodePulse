export const registry = new Map();
export const registerProvider = (name, providerClass) => { registry.set(name.toLowerCase(), providerClass); };
export const getProvider = (name) => { return registry.get(name.toLowerCase()); };
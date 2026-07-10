/**
 * Registry: futureModules
 * Centralized registry for Phase 3 and future phases.
 */
export const registry = new Map();

export const register = (key, value) => {
    registry.set(key, value);
};

export const get = (key) => {
    return registry.get(key);
};

export const getAll = () => {
    return Array.from(registry.entries());
};

export default {
    register,
    get,
    getAll,
    registry
};

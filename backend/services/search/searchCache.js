export const searchCache = {
    cache: new Map(),
    get: (key) => searchCache.cache.get(key),
    set: (key, value) => searchCache.cache.set(key, value)
};

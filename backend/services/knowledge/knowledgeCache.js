export const knowledgeCache = {
    cache: new Map(),
    get: (key) => knowledgeCache.cache.get(key),
    set: (key, value) => knowledgeCache.cache.set(key, value)
};

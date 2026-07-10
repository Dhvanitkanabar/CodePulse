import { retrievalEngine } from './retrievalEngine.js';

export const knowledgeSearch = {
    query: async (text) => {
        return await retrievalEngine.search(text, {});
    }
};

import { semanticSearch } from './semanticSearch.js';
import { keywordSearch } from './keywordSearch.js';

export const hybridSearch = {
    search: async (query, embedding, filters) => {
        const keywords = await keywordSearch.search(query, filters);
        const semantics = await semanticSearch.search(embedding, filters);
        return [...keywords, ...semantics];
    }
};

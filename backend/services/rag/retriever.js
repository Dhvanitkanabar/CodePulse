import { vectorStore } from './vectorStore.js';
export const retrieveDocuments = async (queryEmbedding, limit=5) => { return await vectorStore.similaritySearch('default', queryEmbedding, limit); };
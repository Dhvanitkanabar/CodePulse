export class VectorStore {
    constructor() { this.store = new Map(); }
    async addDocuments(collection, docs) { 
        if(!this.store.has(collection)) this.store.set(collection, []);
        this.store.get(collection).push(...docs);
    }
    async similaritySearch(collection, embedding, k=5) { return this.store.get(collection)?.slice(0,k) || []; }
}
export const vectorStore = new VectorStore();
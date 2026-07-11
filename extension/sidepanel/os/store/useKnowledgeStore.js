import { create } from 'zustand';

export const useKnowledgeStore = create((set) => ({
    documents: [],
    searchResults: [],
    isIndexing: false,
    addDocument: (doc) => set((state) => ({ documents: [...state.documents, doc] })),
    setSearchResults: (results) => set({ searchResults: results }),
    setIsIndexing: (val) => set({ isIndexing: val })
}));
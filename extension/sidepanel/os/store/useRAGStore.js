import { create } from 'zustand';
export const useRAGStore = create((set) => ({ 
    activeDocuments: [], 
    isProcessing: false,
    addDocument: (doc) => set(s => ({ activeDocuments: [...s.activeDocuments, doc] }))
}));
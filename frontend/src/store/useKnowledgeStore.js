import { create } from 'zustand';
export const useKnowledgeStore = create((set) => ({ nodes: [], edges: [], addNode: (n) => set(s => ({ nodes: [...s.nodes, n] })) }));
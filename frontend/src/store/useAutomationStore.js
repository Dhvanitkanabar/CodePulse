import { create } from 'zustand';

export const useAutomationStore = create((set) => ({
    nodes: [],
    edges: [],
    setNodes: (nodes) => set({ nodes }),
    setEdges: (edges) => set({ edges })
}));

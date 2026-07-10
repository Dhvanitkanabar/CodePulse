import { create } from 'zustand';

export const useWorkspaceStore = create((set) => ({
    savedItems: [],
    folders: [],
    tags: [],
    activeWorkspaceId: null,
    canvasNodes: [],
    canvasEdges: [],
    addNode: (node) => set((state) => ({ canvasNodes: [...state.canvasNodes, node] })),
    addEdge: (edge) => set((state) => ({ canvasEdges: [...state.canvasEdges, edge] }))
}));
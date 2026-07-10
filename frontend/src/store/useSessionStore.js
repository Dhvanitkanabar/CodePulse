import { create } from 'zustand';

export const useSessionStore = create((set) => ({
    currentTabs: [],
    recentTabs: [],
    relationships: [],
    knowledgeGraph: { nodes: [], edges: [] },
    currentSession: null,
    workspaceLinks: [],
    setCurrentTabs: (tabs) => set({ currentTabs: tabs })
}));

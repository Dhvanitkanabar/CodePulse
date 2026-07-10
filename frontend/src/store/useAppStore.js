import { create } from 'zustand';

export const useAppStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    activeWorkspace: null,
    agentState: 'idle',
    memoryGraph: [],
    setUser: (user) => set({ user, isAuthenticated: !!user }),
    setWorkspace: (workspace) => set({ activeWorkspace: workspace }),
    setAgentState: (state) => set({ agentState: state }),
    updateMemoryGraph: (nodes) => set({ memoryGraph: nodes })
}));

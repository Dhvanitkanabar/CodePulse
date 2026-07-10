import { create } from 'zustand';

export const useAgentOrchestratorStore = create((set) => ({
    agents: [],
    activeTasks: [],
    setAgents: (agents) => set({ agents }),
    setActiveTasks: (activeTasks) => set({ activeTasks })
}));

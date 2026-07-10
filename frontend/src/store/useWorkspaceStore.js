import { create } from 'zustand';
export const useWorkspaceStore = create((set) => ({ workspaces: [], addWorkspace: (w) => set(s => ({ workspaces: [...s.workspaces, w] })) }));
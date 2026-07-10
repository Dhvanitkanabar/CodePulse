import { create } from 'zustand';
export const useAgentStore = create((set) => ({ currentTask: null, queue: [], status: 'idle' }));
import { create } from 'zustand';
export const useMemoryStore = create((set) => ({ memories: [], addMemory: (m) => set(s => ({ memories: [...s.memories, m] })) }));
import { create } from 'zustand';

export const useChatStore = create((set) => ({
    messages: [],
    isStreaming: false,
    isLoading: false,
    provider: 'gemini',
    model: 'gemini-1.5-pro',
    temperature: 0.7,
    errors: null,
    
    sendMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
    setStreaming: (val) => set({ isStreaming: val }),
    clearChat: () => set({ messages: [] })
}));
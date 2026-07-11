import { create } from 'zustand';

export const useVoiceStore = create((set) => ({
    isListening: false,
    isSpeaking: false,
    currentTranscript: '',
    amplitude: 0,
    voiceHistory: [],
    setIsListening: (val) => set({ isListening: val }),
    setTranscript: (text) => set({ currentTranscript: text }),
    addHistory: (entry) => set((state) => ({ voiceHistory: [...state.voiceHistory, entry] }))
}));

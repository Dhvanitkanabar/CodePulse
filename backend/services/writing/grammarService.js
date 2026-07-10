export const grammarService = {
    check: async (text) => {
        return { correctedText: text, mistakes: [] };
    }
};

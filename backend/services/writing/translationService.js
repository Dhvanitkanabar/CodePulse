export const translationService = {
    translate: async (text, targetLang) => {
        return `Translated to ${targetLang}: ${text}`;
    }
};

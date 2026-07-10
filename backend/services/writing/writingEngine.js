export const writingEngine = {
    process: async (text, action) => {
        return { original: text, action, result: 'processed' };
    }
};

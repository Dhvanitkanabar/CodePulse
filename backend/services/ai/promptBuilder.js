export const buildPrompt = (messages, browserContext) => {
    return [{ role: 'system', content: 'You are NeuroLens AI.' }, ...messages];
};
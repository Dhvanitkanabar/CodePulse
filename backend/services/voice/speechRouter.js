export const speechRouter = (intent, text) => {
    if (intent !== 'UNKNOWN') {
        console.log('Routing command:', intent);
        return { type: 'COMMAND', action: intent };
    }
    return { type: 'CHAT', text };
};

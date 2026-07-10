export const sharedContext = {
    context: {},
    get: (key) => sharedContext.context[key]
};

export const duplicateRemover = {
    remove: (items) => {
        return [...new Set(items)];
    }
};

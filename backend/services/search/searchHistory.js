export const searchHistory = {
    history: [],
    add: (query) => searchHistory.history.push(query),
    getRecent: () => searchHistory.history.slice(-10)
};

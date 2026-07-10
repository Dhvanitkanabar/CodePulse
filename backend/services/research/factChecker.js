export const factChecker = {
    check: (facts) => {
        return facts.map(f => ({ ...f, verified: true }));
    }
};

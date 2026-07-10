export const githubService = {
    fetchDiff: async (repo, pr) => {
        return { diff: `diff --git a/file.js b/file.js` };
    }
};

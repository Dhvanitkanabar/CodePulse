export const sqlGenerator = {
    generate: async (prompt) => {
        return `SELECT * FROM users WHERE active = true;`;
    }
};

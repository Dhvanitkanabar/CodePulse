export const emailGenerator = {
    generate: async (prompt) => {
        return `Subject: New Email\n\nBody based on: ${prompt}`;
    }
};

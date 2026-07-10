export const socialPostGenerator = {
    generate: async (platform, text) => {
        return `Post for ${platform}: ${text}`;
    }
};

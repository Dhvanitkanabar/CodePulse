export const reportGenerator = {
    generate: (topic, content) => {
        return `# Report on ${topic}\n\n${content}`;
    }
};

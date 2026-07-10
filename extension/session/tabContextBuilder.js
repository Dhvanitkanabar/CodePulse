export const buildTabContext = (tabs) => {
    return tabs.map(t => \`Tab: \${t.title}\\nURL: \${t.url}\`).join('\\n\\n');
};

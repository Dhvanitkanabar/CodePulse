export const detectSite = (doc, url) => { if (url.includes('github.com')) return 'GitHub'; if (url.includes('wikipedia.org')) return 'Wikipedia'; return 'Generic'; };

import { detectLanguage } from './language.js';

export const prepareChunks = (data) => {
    const { metadata, structure, selection, siteType } = data;
    
    const language = detectLanguage(structure.article.text);
    
    return {
        page: { url: metadata.url, title: metadata.title, siteType },
        metadata,
        article: structure.article,
        headings: structure.headings,
        paragraphs: structure.article.text.split('\n\n').filter(p => p.trim().length > 0),
        images: structure.images,
        tables: structure.tables,
        codeBlocks: structure.codeBlocks,
        links: structure.links,
        forms: structure.forms,
        selection,
        language,
        statistics: {
            wordCount: structure.article.text.split(/\s+/).length,
            readingTimeMinutes: Math.ceil(structure.article.text.split(/\s+/).length / 200)
        }
    };
};

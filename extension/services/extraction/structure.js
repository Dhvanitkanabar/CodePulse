import { extractImages } from './images.js';
import { extractTables } from './tables.js';
import { extractLists } from './lists.js';
import { extractHeadings } from './headings.js';
import { extractLinks } from './links.js';
import { extractForms } from './forms.js';
import { extractCodeBlocks } from './codeBlocks.js';

export const detectStructure = (doc, siteType) => {
    const mainContent = doc.querySelector('main') || doc.querySelector('article') || doc.body;
    
    return {
        article: { text: mainContent.innerText },
        headings: extractHeadings(mainContent),
        images: extractImages(mainContent),
        tables: extractTables(mainContent),
        lists: extractLists(mainContent),
        links: extractLinks(mainContent),
        forms: extractForms(mainContent),
        codeBlocks: extractCodeBlocks(mainContent)
    };
};

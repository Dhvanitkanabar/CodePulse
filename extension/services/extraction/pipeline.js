import { eventBus } from '../../messaging/eventBus.js';
import { EventTypes } from '../../../../shared/eventTypes.js';
import { extractRawDOM } from './extractor.js';
import { cleanHTML } from './cleaner.js';
import { extractMetadata } from './metadata.js';
import { detectStructure } from './structure.js';
import { prepareChunks } from './chunkPreparation.js';
import { extractSelection } from './selection.js';
import { detectSite } from './siteDetectors.js';

export const runExtractionPipeline = async () => {
    try {
        const rawDom = extractRawDOM();
        const cleanedDoc = cleanHTML(rawDom);
        const metadata = extractMetadata(cleanedDoc);
        const siteType = detectSite(cleanedDoc, metadata.url);
        const structure = detectStructure(cleanedDoc, siteType);
        const selection = extractSelection();
        const output = prepareChunks({ metadata, structure, selection, siteType });
        
        await eventBus.emit(EventTypes.PAGE_EXTRACTED, output);
        return output;
    } catch (error) {
        await eventBus.emit(EventTypes.PAGE_EXTRACTION_FAILED, { error: error.message });
        throw error;
    }
};

// Listen to PAGE_CHANGED
eventBus.on(EventTypes.PAGE_CHANGED, async () => {
    await runExtractionPipeline();
});

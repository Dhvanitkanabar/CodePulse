import { parseIntent } from './intentVoiceParser.js';
import { speechRouter } from './speechRouter.js';
import { voiceHistory } from './voiceHistory.js';

export const voiceEngine = {
    processStream: (transcript) => {
        const intent = parseIntent(transcript);
        const route = speechRouter(intent, transcript);
        voiceHistory.add({ transcript, route });
        return route;
    }
};

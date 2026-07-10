import { voiceCommands } from './voiceCommands.js';

export const parseIntent = (transcript) => {
    const text = transcript.toLowerCase();
    if (text.includes('summarize')) return voiceCommands.SUMMARIZE;
    if (text.includes('scroll')) return voiceCommands.SCROLL;
    if (text.includes('agent')) return voiceCommands.START_AGENT;
    return 'UNKNOWN';
};

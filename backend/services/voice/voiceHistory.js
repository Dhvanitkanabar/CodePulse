export class VoiceHistory {
    constructor() {
        this.history = [];
    }
    add(entry) {
        this.history.push({ timestamp: Date.now(), ...entry });
    }
    getRecent(limit = 10) {
        return this.history.slice(-limit);
    }
}
export const voiceHistory = new VoiceHistory();

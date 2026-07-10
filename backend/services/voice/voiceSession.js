export const voiceSession = {
    active: false,
    context: {},
    start() { this.active = true; },
    stop() { this.active = false; }
};

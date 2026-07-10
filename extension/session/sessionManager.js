import { tabTracker } from './tabTracker.js';

export class SessionManager {
    constructor() {
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        tabTracker.startTracking();
        this.initialized = true;
        console.log('[SessionManager] Cross-Tab Intelligence Tracking Started.');
    }
}

export const sessionManager = new SessionManager();

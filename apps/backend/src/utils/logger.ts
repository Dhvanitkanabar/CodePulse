/**
 * Simple logger utility.
 * TODO: Replace with a production logger (winston, pino, etc.)
 */
export const logger = {
  info: (message: string, ...args: unknown[]) => {
    console.warn(`[INFO] ${new Date().toISOString()} — ${message}`, ...args);
  },
  error: (message: string, ...args: unknown[]) => {
    console.error(`[ERROR] ${new Date().toISOString()} — ${message}`, ...args);
  },
  debug: (message: string, ...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[DEBUG] ${new Date().toISOString()} — ${message}`, ...args);
    }
  },
};

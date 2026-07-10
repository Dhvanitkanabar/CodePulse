// ========================
// Shared Configuration
// ========================

export interface AppConfig {
  apiUrl: string;
  appName: string;
  environment: 'development' | 'production' | 'test';
  debug: boolean;
}

export const getConfig = (): AppConfig => ({
  apiUrl: typeof import.meta !== 'undefined'
    ? (import.meta as Record<string, Record<string, string>>).env?.VITE_API_URL ?? 'http://localhost:4000/api'
    : process.env.API_URL ?? 'http://localhost:4000/api',
  appName: 'NeuroLens AI',
  environment: (process.env.NODE_ENV as AppConfig['environment']) ?? 'development',
  debug: process.env.NODE_ENV !== 'production',
});

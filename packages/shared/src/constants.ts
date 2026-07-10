// ========================
// Application Constants
// ========================

export const APP_NAME = 'NeuroLens AI';
export const APP_VERSION = '0.1.0';
export const APP_DESCRIPTION = 'Intelligent Chrome Extension Browser Companion';

// API
export const API_BASE_URL = '/api';
export const API_VERSION = 'v1';
export const API_TIMEOUT = 30_000;

// Pagination
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// AI
export const AI_PROVIDERS = {
  GEMINI: 'gemini',
  OLLAMA: 'ollama',
} as const;

export const DEFAULT_AI_SETTINGS = {
  provider: AI_PROVIDERS.GEMINI,
  temperature: 0.7,
  maxTokens: 4096,
} as const;

// Chrome Extension
export const EXTENSION_MESSAGES = {
  EXTRACT_CONTENT: 'EXTRACT_CONTENT',
  PAGE_INFO: 'PAGE_INFO',
  TOGGLE_SIDEPANEL: 'TOGGLE_SIDEPANEL',
  OPEN_POPUP: 'OPEN_POPUP',
  SAVE_BOOKMARK: 'SAVE_BOOKMARK',
  SUMMARIZE_PAGE: 'SUMMARIZE_PAGE',
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'neurolens_auth_token',
  REFRESH_TOKEN: 'neurolens_refresh_token',
  USER: 'neurolens_user',
  SETTINGS: 'neurolens_settings',
  THEME: 'neurolens_theme',
} as const;

// Theme
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

// Routes
export const ROUTES = {
  DASHBOARD: '/',
  HISTORY: '/history',
  BOOKMARKS: '/bookmarks',
  SETTINGS: '/settings',
  MEMORY: '/memory',
  KNOWLEDGE: '/knowledge',
  WORKSPACE: '/workspace',
  ANALYTICS: '/analytics',
} as const;

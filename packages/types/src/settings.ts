// ========================
// Settings Types
// ========================

export interface Settings {
  id: string;
  userId: string;
  general: GeneralSettings;
  ai: AISettings;
  privacy: PrivacySettings;
  appearance: AppearanceSettings;
  notifications: NotificationSettings;
  shortcuts: ShortcutSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface GeneralSettings {
  language: string;
  autoStart: boolean;
  startMinimized: boolean;
  defaultView: 'popup' | 'sidepanel';
}

export interface AISettings {
  provider: 'gemini' | 'ollama';
  model: string;
  temperature: number;
  maxTokens: number;
  autoSummarize: boolean;
  autoExtract: boolean;
}

export interface PrivacySettings {
  saveHistory: boolean;
  saveConversations: boolean;
  shareAnalytics: boolean;
  dataRetentionDays: number;
}

export interface AppearanceSettings {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  compactMode: boolean;
  animationsEnabled: boolean;
}

export interface NotificationSettings {
  enabled: boolean;
  sound: boolean;
  summaryAlerts: boolean;
  insightAlerts: boolean;
}

export interface ShortcutSettings {
  toggleSidePanel: string;
  quickChat: string;
  extractContent: string;
  voiceInput: string;
}

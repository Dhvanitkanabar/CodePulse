import mongoose, { type Document, Schema } from 'mongoose';

export interface ISettings extends Document {
  userId: mongoose.Types.ObjectId;
  general: {
    language: string;
    autoStart: boolean;
    startMinimized: boolean;
    defaultView: 'popup' | 'sidepanel';
  };
  ai: {
    provider: 'gemini' | 'ollama';
    model: string;
    temperature: number;
    maxTokens: number;
    autoSummarize: boolean;
    autoExtract: boolean;
  };
  privacy: {
    saveHistory: boolean;
    saveConversations: boolean;
    shareAnalytics: boolean;
    dataRetentionDays: number;
  };
  appearance: {
    theme: 'light' | 'dark' | 'system';
    fontSize: 'small' | 'medium' | 'large';
    compactMode: boolean;
    animationsEnabled: boolean;
  };
  notifications: {
    enabled: boolean;
    sound: boolean;
    summaryAlerts: boolean;
    insightAlerts: boolean;
  };
  shortcuts: {
    toggleSidePanel: string;
    quickChat: string;
    extractContent: string;
    voiceInput: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const settingsSchema = new Schema<ISettings>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    general: {
      language: { type: String, default: 'en' },
      autoStart: { type: Boolean, default: true },
      startMinimized: { type: Boolean, default: false },
      defaultView: { type: String, enum: ['popup', 'sidepanel'], default: 'sidepanel' },
    },
    ai: {
      provider: { type: String, enum: ['gemini', 'ollama'], default: 'gemini' },
      model: { type: String, default: 'gemini-pro' },
      temperature: { type: Number, default: 0.7, min: 0, max: 2 },
      maxTokens: { type: Number, default: 4096 },
      autoSummarize: { type: Boolean, default: true },
      autoExtract: { type: Boolean, default: true },
    },
    privacy: {
      saveHistory: { type: Boolean, default: true },
      saveConversations: { type: Boolean, default: true },
      shareAnalytics: { type: Boolean, default: false },
      dataRetentionDays: { type: Number, default: 90 },
    },
    appearance: {
      theme: { type: String, enum: ['light', 'dark', 'system'], default: 'dark' },
      fontSize: { type: String, enum: ['small', 'medium', 'large'], default: 'medium' },
      compactMode: { type: Boolean, default: false },
      animationsEnabled: { type: Boolean, default: true },
    },
    notifications: {
      enabled: { type: Boolean, default: true },
      sound: { type: Boolean, default: false },
      summaryAlerts: { type: Boolean, default: true },
      insightAlerts: { type: Boolean, default: true },
    },
    shortcuts: {
      toggleSidePanel: { type: String, default: 'Alt+S' },
      quickChat: { type: String, default: 'Alt+C' },
      extractContent: { type: String, default: 'Alt+E' },
      voiceInput: { type: String, default: 'Alt+V' },
    },
  },
  { timestamps: true },
);

export const Settings = mongoose.model<ISettings>('Settings', settingsSchema);

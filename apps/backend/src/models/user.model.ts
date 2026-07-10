import mongoose, { type Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  avatar?: string;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    aiProvider: 'gemini' | 'ollama';
    voiceEnabled: boolean;
    autoExtract: boolean;
    notificationsEnabled: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6, select: false },
    name: { type: String, required: true, trim: true },
    avatar: { type: String },
    preferences: {
      theme: { type: String, enum: ['light', 'dark', 'system'], default: 'dark' },
      language: { type: String, default: 'en' },
      aiProvider: { type: String, enum: ['gemini', 'ollama'], default: 'gemini' },
      voiceEnabled: { type: Boolean, default: false },
      autoExtract: { type: Boolean, default: true },
      notificationsEnabled: { type: Boolean, default: true },
    },
  },
  { timestamps: true },
);

userSchema.index({ email: 1 });

export const User = mongoose.model<IUser>('User', userSchema);

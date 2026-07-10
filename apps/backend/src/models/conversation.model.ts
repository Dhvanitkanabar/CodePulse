import mongoose, { type Document, Schema } from 'mongoose';

export interface IMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  metadata?: {
    sourceUrl?: string;
    extractedContent?: string;
    tokens?: number;
  };
}

export interface IConversation extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  messages: IMessage[];
  websiteUrl?: string;
  websiteTitle?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    role: { type: String, enum: ['user', 'assistant', 'system'], required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    metadata: {
      sourceUrl: { type: String },
      extractedContent: { type: String },
      tokens: { type: Number },
    },
  },
  { _id: true },
);

const conversationSchema = new Schema<IConversation>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    messages: [messageSchema],
    websiteUrl: { type: String },
    websiteTitle: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true },
);

conversationSchema.index({ userId: 1, updatedAt: -1 });

export const Conversation = mongoose.model<IConversation>('Conversation', conversationSchema);

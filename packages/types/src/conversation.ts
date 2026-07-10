// ========================
// Conversation Types
// ========================

export type MessageRole = 'user' | 'assistant' | 'system';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  metadata?: MessageMetadata;
}

export interface MessageMetadata {
  sourceUrl?: string;
  extractedContent?: string;
  tokens?: number;
}

export interface Conversation {
  id: string;
  userId: string;
  title: string;
  messages: Message[];
  websiteUrl?: string;
  websiteTitle?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ConversationSummary {
  id: string;
  title: string;
  messageCount: number;
  lastMessage?: string;
  websiteUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

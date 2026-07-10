// ========================
// Memory Types
// ========================

export type MemoryType = 'fact' | 'preference' | 'context' | 'insight' | 'summary';

export interface Memory {
  id: string;
  userId: string;
  type: MemoryType;
  key: string;
  value: string;
  sourceUrl?: string;
  confidence: number;
  accessCount: number;
  lastAccessedAt: Date;
  expiresAt?: Date;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MemoryCreateInput {
  type: MemoryType;
  key: string;
  value: string;
  sourceUrl?: string;
  confidence?: number;
  tags?: string[];
}

export interface MemorySearchParams {
  query: string;
  type?: MemoryType;
  limit?: number;
  minConfidence?: number;
}

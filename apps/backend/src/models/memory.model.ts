import mongoose, { type Document, Schema } from 'mongoose';

export interface IMemory extends Document {
  userId: mongoose.Types.ObjectId;
  type: 'fact' | 'preference' | 'context' | 'insight' | 'summary';
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

const memorySchema = new Schema<IMemory>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['fact', 'preference', 'context', 'insight', 'summary'], required: true },
    key: { type: String, required: true },
    value: { type: String, required: true },
    sourceUrl: { type: String },
    confidence: { type: Number, default: 1.0, min: 0, max: 1 },
    accessCount: { type: Number, default: 0 },
    lastAccessedAt: { type: Date, default: Date.now },
    expiresAt: { type: Date },
    tags: [{ type: String }],
  },
  { timestamps: true },
);

memorySchema.index({ userId: 1, type: 1 });
memorySchema.index({ userId: 1, key: 1 });
memorySchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const Memory = mongoose.model<IMemory>('Memory', memorySchema);

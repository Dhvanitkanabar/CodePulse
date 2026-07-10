import mongoose, { type Document, Schema } from 'mongoose';

export interface IReadingHistory extends Document {
  userId: mongoose.Types.ObjectId;
  url: string;
  title: string;
  favicon?: string;
  domain: string;
  visitCount: number;
  totalReadTime: number;
  lastVisitedAt: Date;
  extractedContent?: string;
  aiSummary?: string;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}

const readingHistorySchema = new Schema<IReadingHistory>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    url: { type: String, required: true },
    title: { type: String, required: true },
    favicon: { type: String },
    domain: { type: String, required: true },
    visitCount: { type: Number, default: 1 },
    totalReadTime: { type: Number, default: 0 },
    lastVisitedAt: { type: Date, default: Date.now },
    extractedContent: { type: String },
    aiSummary: { type: String },
    category: { type: String },
  },
  { timestamps: true },
);

readingHistorySchema.index({ userId: 1, lastVisitedAt: -1 });
readingHistorySchema.index({ userId: 1, domain: 1 });

export const ReadingHistory = mongoose.model<IReadingHistory>('ReadingHistory', readingHistorySchema);

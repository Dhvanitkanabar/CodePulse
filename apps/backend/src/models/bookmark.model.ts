import mongoose, { type Document, Schema } from 'mongoose';

export interface IBookmark extends Document {
  userId: mongoose.Types.ObjectId;
  url: string;
  title: string;
  description?: string;
  favicon?: string;
  tags: string[];
  category?: string;
  aiSummary?: string;
  content?: string;
  createdAt: Date;
  updatedAt: Date;
}

const bookmarkSchema = new Schema<IBookmark>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    url: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String },
    favicon: { type: String },
    tags: [{ type: String }],
    category: { type: String },
    aiSummary: { type: String },
    content: { type: String },
  },
  { timestamps: true },
);

bookmarkSchema.index({ userId: 1, createdAt: -1 });
bookmarkSchema.index({ userId: 1, tags: 1 });

export const Bookmark = mongoose.model<IBookmark>('Bookmark', bookmarkSchema);

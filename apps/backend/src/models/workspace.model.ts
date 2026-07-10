import mongoose, { type Document, Schema } from 'mongoose';

export interface IWorkspace extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  bookmarkIds: mongoose.Types.ObjectId[];
  conversationIds: mongoose.Types.ObjectId[];
  knowledgeNodeIds: mongoose.Types.ObjectId[];
  tags: string[];
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const workspaceSchema = new Schema<IWorkspace>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true, trim: true },
    description: { type: String },
    icon: { type: String },
    color: { type: String },
    bookmarkIds: [{ type: Schema.Types.ObjectId, ref: 'Bookmark' }],
    conversationIds: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
    knowledgeNodeIds: [{ type: Schema.Types.ObjectId, ref: 'KnowledgeNode' }],
    tags: [{ type: String }],
    isPinned: { type: Boolean, default: false },
  },
  { timestamps: true },
);

workspaceSchema.index({ userId: 1, updatedAt: -1 });

export const Workspace = mongoose.model<IWorkspace>('Workspace', workspaceSchema);

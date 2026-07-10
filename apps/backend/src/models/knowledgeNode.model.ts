import mongoose, { type Document, Schema } from 'mongoose';

export interface IKnowledgeEdge {
  targetNodeId: mongoose.Types.ObjectId;
  relationship: string;
  weight: number;
}

export interface IKnowledgeNode extends Document {
  userId: mongoose.Types.ObjectId;
  type: 'concept' | 'entity' | 'topic' | 'webpage' | 'note';
  label: string;
  description?: string;
  content?: string;
  sourceUrl?: string;
  tags: string[];
  connections: IKnowledgeEdge[];
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

const knowledgeEdgeSchema = new Schema<IKnowledgeEdge>(
  {
    targetNodeId: { type: Schema.Types.ObjectId, ref: 'KnowledgeNode', required: true },
    relationship: { type: String, required: true },
    weight: { type: Number, default: 1.0, min: 0, max: 1 },
  },
  { _id: false },
);

const knowledgeNodeSchema = new Schema<IKnowledgeNode>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['concept', 'entity', 'topic', 'webpage', 'note'], required: true },
    label: { type: String, required: true, trim: true },
    description: { type: String },
    content: { type: String },
    sourceUrl: { type: String },
    tags: [{ type: String }],
    connections: [knowledgeEdgeSchema],
    metadata: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true },
);

knowledgeNodeSchema.index({ userId: 1, type: 1 });
knowledgeNodeSchema.index({ userId: 1, tags: 1 });
knowledgeNodeSchema.index({ label: 'text', description: 'text' });

export const KnowledgeNode = mongoose.model<IKnowledgeNode>('KnowledgeNode', knowledgeNodeSchema);

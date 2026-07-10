// ========================
// Knowledge Graph Types
// ========================

export type NodeType = 'concept' | 'entity' | 'topic' | 'webpage' | 'note';

export interface KnowledgeNode {
  id: string;
  userId: string;
  type: NodeType;
  label: string;
  description?: string;
  content?: string;
  sourceUrl?: string;
  tags: string[];
  connections: KnowledgeEdge[];
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface KnowledgeEdge {
  targetNodeId: string;
  relationship: string;
  weight: number;
}

export interface KnowledgeGraphData {
  nodes: KnowledgeNode[];
  edges: {
    source: string;
    target: string;
    relationship: string;
    weight: number;
  }[];
}

export interface KnowledgeSearchResult {
  node: KnowledgeNode;
  relevanceScore: number;
  matchedField: string;
}

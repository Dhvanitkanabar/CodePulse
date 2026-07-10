// ========================
// Workspace Types
// ========================

export interface Workspace {
  id: string;
  userId: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  bookmarkIds: string[];
  conversationIds: string[];
  knowledgeNodeIds: string[];
  tags: string[];
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkspaceCreateInput {
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  tags?: string[];
}

export interface WorkspaceSummary {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  itemCount: number;
  isPinned: boolean;
  updatedAt: Date;
}

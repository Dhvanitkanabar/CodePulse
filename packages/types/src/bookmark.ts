// ========================
// Bookmark Types
// ========================

export interface Bookmark {
  id: string;
  userId: string;
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

export interface BookmarkCreateInput {
  url: string;
  title: string;
  description?: string;
  tags?: string[];
  category?: string;
}

export interface BookmarkFilters {
  search?: string;
  tags?: string[];
  category?: string;
  sortBy?: 'createdAt' | 'title' | 'updatedAt';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

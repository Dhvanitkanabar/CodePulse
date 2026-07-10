// ========================
// Reading History Types
// ========================

export interface ReadingHistory {
  id: string;
  userId: string;
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

export interface HistoryFilters {
  search?: string;
  domain?: string;
  dateFrom?: Date;
  dateTo?: Date;
  category?: string;
  sortBy?: 'lastVisitedAt' | 'visitCount' | 'totalReadTime';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface HistoryStats {
  totalPages: number;
  totalReadTime: number;
  topDomains: { domain: string; count: number }[];
  dailyActivity: { date: string; count: number }[];
}

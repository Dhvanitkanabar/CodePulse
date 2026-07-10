// ========================
// Content Service Stub
// ========================

export class ContentService {
  async extract(_url: string) {
    // TODO: implement content extraction with Readability.js
    throw new Error('Not implemented');
  }

  async summarize(_content: string) {
    // TODO: implement AI summarization
    throw new Error('Not implemented');
  }

  async analyzeWebsite(_url: string) {
    // TODO: implement website type analysis
    throw new Error('Not implemented');
  }
}

export const contentService = new ContentService();

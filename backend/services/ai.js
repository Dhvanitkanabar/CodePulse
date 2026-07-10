// AI Service Stub

export const ollamaInference = async (prompt) => { return 'Response'; };

export class AIService {
  constructor() {
    this.model = 'gemini';
  }

  async chat(messages, options = {}) {
    // Stub — return placeholder
    return { role: 'assistant', content: 'AI response placeholder' };
  }

  async summarize(text) {
    return 'Summary placeholder';
  }

  async embed(text) {
    return [];
  }
}

export default new AIService();

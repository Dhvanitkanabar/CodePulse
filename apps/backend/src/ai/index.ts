// ========================
// AI Module Stub
// Gemini + Ollama providers
// ========================

export interface AIProvider {
  name: string;
  generateResponse(prompt: string, context?: string): Promise<string>;
  generateEmbedding(text: string): Promise<number[]>;
}

/**
 * Factory to get AI provider based on configuration.
 * TODO: implement Gemini and Ollama providers.
 */
export const getAIProvider = (_provider: 'gemini' | 'ollama'): AIProvider => {
  // TODO: implement provider switching
  throw new Error('AI providers not yet implemented');
};

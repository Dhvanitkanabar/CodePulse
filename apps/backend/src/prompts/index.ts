// ========================
// Prompt Templates Stub
// ========================

export const PROMPTS = {
  SYSTEM: `You are NeuroLens AI, an intelligent browser companion. You help users understand web content, answer questions, and provide insights.`,

  SUMMARIZE: `Summarize the following web page content concisely:\n\n{content}`,

  EXTRACT_KNOWLEDGE: `Extract key concepts and entities from the following content:\n\n{content}`,

  ANSWER_QUESTION: `Based on the following context, answer the user's question.\n\nContext: {context}\n\nQuestion: {question}`,

  ANALYZE_WEBSITE: `Analyze the type and purpose of this website based on its content:\n\n{content}`,
} as const;

/**
 * Interpolate template variables.
 */
export const fillPrompt = (template: string, variables: Record<string, string>): string => {
  let result = template;
  for (const [key, value] of Object.entries(variables)) {
    result = result.replace(`{${key}}`, value);
  }
  return result;
};

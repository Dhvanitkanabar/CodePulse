import { registerProvider } from './providerRegistry.js';
import { DummyProvider as Gemini } from './providers/gemini.js';
import { DummyProvider as OpenRouter } from './providers/openrouter.js';
import { DummyProvider as Ollama } from './providers/ollama.js';
import { DummyProvider as OpenAI } from './providers/openai.js';
import { DummyProvider as Groq } from './providers/groq.js';
import { DummyProvider as DeepSeek } from './providers/deepseek.js';

registerProvider('gemini', Gemini);
registerProvider('openrouter', OpenRouter);
registerProvider('ollama', Ollama);
registerProvider('openai', OpenAI);
registerProvider('groq', Groq);
registerProvider('deepseek', DeepSeek);
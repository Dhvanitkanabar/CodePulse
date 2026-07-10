const fs = require('fs');
const path = require('path');
const aiDir = 'c:/Users/dhvan/Desktop/HackSprint/CodePulse/backend/services/ai';
const providersDir = path.join(aiDir, 'providers');

fs.mkdirSync(providersDir, { recursive: true });

const files = {
    'providerRegistry.js': `export const registry = new Map();
export const registerProvider = (name, providerClass) => { registry.set(name.toLowerCase(), providerClass); };
export const getProvider = (name) => { return registry.get(name.toLowerCase()); };`,
    
    'providerFactory.js': `import { getProvider } from './providerRegistry.js';
export class ProviderFactory {
    static create(providerName, config) {
        const ProviderClass = getProvider(providerName);
        if (!ProviderClass) throw new Error('Provider not found');
        return new ProviderClass(config);
    }
}`,
    
    'router.js': `import { ProviderFactory } from './providerFactory.js';
import { buildPrompt } from './promptBuilder.js';
import { parseStream } from './streamParser.js';

export const routeChatRequest = async (req, res) => {
    try {
        const { provider, model, messages, context, options } = req.body;
        const llm = ProviderFactory.create(provider, { model, ...options });
        const finalMessages = buildPrompt(messages, context);
        
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        const stream = await llm.chatStream(finalMessages);
        for await (const chunk of parseStream(stream, provider)) {
            res.write('data: ' + JSON.stringify(chunk) + '\\n\\n');
        }
        res.write('data: [DONE]\\n\\n');
        res.end();
    } catch (error) {
        res.write('data: ' + JSON.stringify({ error: error.message }) + '\\n\\n');
        res.end();
    }
};`,

    'streamParser.js': `export async function* parseStream(stream, providerName) {
    for await (const chunk of stream) {
        yield { text: chunk.text || chunk.content || chunk };
    }
}`,

    'promptBuilder.js': `export const buildPrompt = (messages, browserContext) => {
    return [{ role: 'system', content: 'You are NeuroLens AI.' }, ...messages];
};`,

    'contextBuilder.js': `export const buildContext = (ext) => ({ url: ext?.metadata?.url });`,
    'conversationManager.js': `export const manageConversation = (h, n) => [...h, n];`,
    'tokenCounter.js': `export const countTokens = (text) => Math.ceil(text.split(/\\s+/).length * 1.3);`,
    'responseFormatter.js': `export const formatResponse = (raw) => raw.trim();`,
    'markdownFormatter.js': `export const fixBrokenMarkdown = (md) => md.replace(/\\\\n/g, '\\n');`
};

Object.entries(files).forEach(([name, content]) => fs.writeFileSync(path.join(aiDir, name), content));

const dummy = `export class DummyProvider {
    constructor(config) { this.config = config; }
    async *chatStream(messages) {
        const text = 'Streaming from ' + this.constructor.name;
        for (let i = 0; i < text.length; i++) {
            yield { text: text[i] };
            await new Promise(r => setTimeout(r, 20));
        }
    }
}`;

['gemini','openrouter','ollama','openai','groq','deepseek'].forEach(p => {
    fs.writeFileSync(path.join(providersDir, p + '.js'), dummy);
});

fs.writeFileSync(path.join(aiDir, 'index.js'), `import { registerProvider } from './providerRegistry.js';
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
registerProvider('deepseek', DeepSeek);`);

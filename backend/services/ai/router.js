import { ProviderFactory } from './providerFactory.js';
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
            res.write('data: ' + JSON.stringify(chunk) + '\n\n');
        }
        res.write('data: [DONE]\n\n');
        res.end();
    } catch (error) {
        res.write('data: ' + JSON.stringify({ error: error.message }) + '\n\n');
        res.end();
    }
};
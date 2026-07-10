const fs = require('fs');
const path = require('path');
const chatDir = 'c:/Users/dhvan/Desktop/HackSprint/CodePulse/frontend/src/components/chat';
const storeDir = 'c:/Users/dhvan/Desktop/HackSprint/CodePulse/frontend/src/store';

fs.mkdirSync(chatDir, { recursive: true });
fs.mkdirSync(storeDir, { recursive: true });

const chatFiles = {
    'ChatWindow.jsx': `export default function ChatWindow() { return <div className="chat-window">Chat Window</div>; }`,
    'ChatInput.jsx': `export default function ChatInput() { return <div className="chat-input">Chat Input</div>; }`,
    'StreamingMessage.jsx': `export default function StreamingMessage() { return <div className="streaming-message">Streaming...</div>; }`,
    'MarkdownRenderer.jsx': `export default function MarkdownRenderer({content}) { return <div className="markdown">{content}</div>; }`,
    'CodeBlock.jsx': `export default function CodeBlock({code}) { return <pre><code>{code}</code></pre>; }`,
    'ModelSelector.jsx': `export default function ModelSelector() { return <select><option>Model</option></select>; }`,
    'ProviderSelector.jsx': `export default function ProviderSelector() { return <select><option>Provider</option></select>; }`,
    'TypingIndicator.jsx': `export default function TypingIndicator() { return <div className="typing">Typing...</div>; }`,
    'ThinkingIndicator.jsx': `export default function ThinkingIndicator() { return <div className="thinking">Thinking...</div>; }`,
    'StopGenerationButton.jsx': `export default function StopGenerationButton() { return <button>Stop</button>; }`,
    'RetryButton.jsx': `export default function RetryButton() { return <button>Retry</button>; }`,
    'CopyButton.jsx': `export default function CopyButton() { return <button>Copy</button>; }`,
    'ResponseToolbar.jsx': `export default function ResponseToolbar() { return <div className="toolbar">Toolbar</div>; }`,
    'ConversationList.jsx': `export default function ConversationList() { return <ul>List</ul>; }`,
    'ConversationItem.jsx': `export default function ConversationItem() { return <li>Item</li>; }`,
    'index.js': `export { default as ChatWindow } from './ChatWindow.jsx';\nexport { default as ChatInput } from './ChatInput.jsx';`
};

Object.entries(chatFiles).forEach(([name, content]) => fs.writeFileSync(path.join(chatDir, name), content));

const storeContent = `import { create } from 'zustand';

export const useChatStore = create((set) => ({
    messages: [],
    isStreaming: false,
    isLoading: false,
    provider: 'gemini',
    model: 'gemini-1.5-pro',
    temperature: 0.7,
    errors: null,
    
    sendMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
    setStreaming: (val) => set({ isStreaming: val }),
    clearChat: () => set({ messages: [] })
}));`;

fs.writeFileSync(path.join(storeDir, 'useChatStore.js'), storeContent);

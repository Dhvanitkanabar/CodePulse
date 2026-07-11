import React, { useState } from 'react';
import './sidepanel.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([{ role: 'system', content: 'Hello! I am NeuroLens AI. How can I help you today?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // Direct call to our backend AI engine
      const res = await fetch('http://localhost:5000/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, context: 'browser_extension' })
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'ai', content: data.reply || 'Sorry, the backend is unreachable.' }]);
    } catch (e) {
      setMessages([...newMessages, { role: 'ai', content: 'Error connecting to NeuroLens AI Engine. Are you sure the backend is running?' }]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white font-sans">
      <nav className="flex space-x-2 p-2 bg-[#111111] overflow-x-auto border-b border-surface-700 scrollbar-hide">
        {['chat', 'workspace', 'knowledge', 'history', 'voice', 'analytics'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium capitalize transition-colors ${activeTab === tab ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white hover:bg-[#151515]'}`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="flex-1 overflow-y-auto p-4">
        {activeTab === 'chat' && (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((m, i) => (
                <div key={i} className={`p-3 rounded-lg max-w-[90%] ${m.role === 'user' ? 'bg-white text-black ml-auto font-medium' : 'bg-[#1e1e1e] border border-surface-700 text-white'}`}>
                  {m.content}
                </div>
              ))}
              {loading && <div className="text-slate-400 text-sm animate-pulse">NeuroLens is thinking...</div>}
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything..."
                className="flex-1 bg-transparent border border-surface-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-white hover:bg-[#e5e5e5] text-black px-4 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {activeTab === 'workspace' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Active Workspace</h2>
            <div className="p-4 bg-[#111111] rounded-lg border border-surface-700">
              <p className="text-slate-300">Hackathon Project Demo</p>
              <div className="mt-2 text-xs text-white bg-[#151515] border border-surface-700 inline-block px-2 py-1 rounded">3 Active Agents</div>
            </div>
          </div>
        )}

        {activeTab === 'knowledge' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Knowledge Base</h2>
            <div className="text-slate-400 italic">Semantic memory graph loaded.</div>
            <ul className="space-y-2 mt-4">
              <li className="p-2 bg-[#111111] rounded border border-surface-700">React & Tailwind Guidelines</li>
              <li className="p-2 bg-[#111111] rounded border border-surface-700">Architecture Diagrams</li>
            </ul>
          </div>
        )}

        {['history', 'voice', 'analytics'].includes(activeTab) && (
          <div className="flex items-center justify-center h-full text-slate-500 italic">
            This module is connected via EventBus in the background.
          </div>
        )}
      </main>
    </div>
  );
};

export default App;

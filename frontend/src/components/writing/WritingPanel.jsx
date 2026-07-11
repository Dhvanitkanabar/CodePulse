import React, { useState } from 'react';
import { PenTool, Type, Wand2, SpellCheck, Copy, Check, MessageSquare } from 'lucide-react';

export const WritingPanel = () => {
    const [text, setText] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleAction = (action) => {
        if (!text.trim()) return;
        setIsGenerating(true);
        setTimeout(() => setIsGenerating(false), 1500);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="h-full flex flex-col pb-20">
            <header className="mb-6 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                    <PenTool className="w-8 h-8 text-white" />
                    <h1 className="text-3xl font-bold text-white">Writing Copilot</h1>
                </div>
                <p className="text-slate-400">Draft, refine, and perfect your content with AI assistance.</p>
            </header>

            <div className="flex gap-2 mb-4 shrink-0 overflow-x-auto scrollbar-hide pb-2">
                <button onClick={() => handleAction('improve')} className="px-3 py-1.5 bg-transparent hover:bg-[#151515] border border-surface-700 rounded-md text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap">
                    <Wand2 className="w-4 h-4 text-white" /> Improve
                </button>
                <button onClick={() => handleAction('grammar')} className="px-3 py-1.5 bg-transparent hover:bg-[#151515] border border-surface-700 rounded-md text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap">
                    <SpellCheck className="w-4 h-4 text-white" /> Fix Grammar
                </button>
                <button onClick={() => handleAction('professional')} className="px-3 py-1.5 bg-transparent hover:bg-[#151515] border border-surface-700 rounded-md text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap">
                    <Type className="w-4 h-4 text-white" /> Professional
                </button>
                <button onClick={() => handleAction('friendly')} className="px-3 py-1.5 bg-transparent hover:bg-[#151515] border border-surface-700 rounded-md text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap">
                    <MessageSquare className="w-4 h-4 text-white" /> Friendly
                </button>
            </div>

            <div className="flex-1 bg-[#111111] border border-surface-700 rounded-xl flex flex-col overflow-hidden relative">
                {isGenerating && (
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                        <Wand2 className="w-8 h-8 text-white animate-pulse mb-3" />
                        <div className="text-sm font-medium text-white">Refining text...</div>
                    </div>
                )}
                <div className="flex justify-between items-center px-4 py-2 bg-transparent border-b border-surface-700">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Draft</span>
                    <button 
                        onClick={handleCopy}
                        disabled={!text.trim()}
                        className="p-1.5 hover:bg-white/10 rounded-md text-slate-400 hover:text-white transition-colors disabled:opacity-30"
                    >
                        {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Start typing or paste content here..."
                    className="flex-1 w-full bg-transparent p-4 text-slate-200 resize-none outline-none placeholder:text-slate-600 leading-relaxed"
                />
            </div>
        </div>
    );
};

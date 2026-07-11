import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, GitMerge, Bug, CheckCircle, Terminal, Play, Settings2 } from 'lucide-react';

export const SystemInspector = () => {
    const [activeTab, setActiveTab] = useState('analysis');
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleRunAnalysis = () => {
        setIsAnalyzing(true);
        setTimeout(() => setIsAnalyzing(false), 2000);
    };

    return (
        <div className="h-full overflow-y-auto pb-20">
            <header className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-8 h-8 text-white" />
                    <h1 className="text-3xl font-bold text-white">Developer Copilot</h1>
                </div>
                <p className="text-slate-400">Context-aware code analysis, PR reviews, and automated debugging.</p>
            </header>

            <div className="flex gap-4 mb-6 border-b border-surface-700 pb-2">
                {['analysis', 'pr-review', 'terminal'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                            activeTab === tab ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {tab.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </button>
                ))}
            </div>

            {activeTab === 'analysis' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="bg-[#111111] border border-surface-700 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                <Settings2 className="w-5 h-5 text-white" />
                                Current Environment
                            </h3>
                            <button 
                                onClick={handleRunAnalysis}
                                disabled={isAnalyzing}
                                className="px-4 py-1.5 bg-white hover:bg-[#e5e5e5] text-black rounded-md text-sm font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
                            >
                                <Play className="w-4 h-4 text-black" /> {isAnalyzing ? 'Scanning...' : 'Scan Context'}
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black rounded-lg p-4 border border-surface-700">
                                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Detected Framework</div>
                                <div className="text-white font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    React + Vite
                                </div>
                            </div>
                            <div className="bg-black rounded-lg p-4 border border-surface-700">
                                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Active File</div>
                                <div className="text-white font-medium font-mono text-sm truncate">
                                    SystemInspector.jsx
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111111] border border-surface-700 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center gap-3 p-4 bg-transparent hover:bg-[#151515] border border-surface-700 rounded-lg text-left transition-colors group">
                                <Bug className="w-5 h-5 text-surface-400 group-hover:text-white group-hover:scale-110 transition-all" />
                                <div>
                                    <div className="text-sm font-medium text-white">Find Bugs</div>
                                    <div className="text-xs text-slate-400">Scan active code for issues</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 p-4 bg-transparent hover:bg-[#151515] border border-surface-700 rounded-lg text-left transition-colors group">
                                <CheckCircle className="w-5 h-5 text-surface-400 group-hover:text-white group-hover:scale-110 transition-all" />
                                <div>
                                    <div className="text-sm font-medium text-white">Generate Tests</div>
                                    <div className="text-xs text-slate-400">Create unit tests</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 p-4 bg-transparent hover:bg-[#151515] border border-surface-700 rounded-lg text-left transition-colors group">
                                <Code2 className="w-5 h-5 text-surface-400 group-hover:text-white group-hover:scale-110 transition-all" />
                                <div>
                                    <div className="text-sm font-medium text-white">Explain Code</div>
                                    <div className="text-xs text-slate-400">Break down complex logic</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 p-4 bg-transparent hover:bg-[#151515] border border-surface-700 rounded-lg text-left transition-colors group">
                                <GitMerge className="w-5 h-5 text-surface-400 group-hover:text-white group-hover:scale-110 transition-all" />
                                <div>
                                    <div className="text-sm font-medium text-white">Refactor</div>
                                    <div className="text-xs text-slate-400">Optimize for performance</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {activeTab === 'pr-review' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center p-12 text-center bg-[#111111] rounded-xl border border-surface-700">
                    <GitMerge className="w-12 h-12 text-slate-500 mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">No Pull Request Context</h3>
                    <p className="text-slate-400 max-w-sm">Connect your GitHub account in the Integrations Hub or navigate to a PR page to start an automated review.</p>
                </motion.div>
            )}

            {activeTab === 'terminal' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-black rounded-xl border border-surface-700 overflow-hidden font-mono text-sm">
                    <div className="flex items-center gap-2 px-4 py-2 bg-transparent border-b border-surface-700">
                        <Terminal className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-400">Agent Execution Log</span>
                    </div>
                    <div className="p-4 text-white min-h-[200px] flex flex-col justify-end">
                        <div className="opacity-50"># NeuroLens Environment Initialized</div>
                        <div className="opacity-50"># Awaiting commands...</div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-white">❯</span>
                            <span className="w-2 h-4 bg-slate-400 animate-pulse"></span>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

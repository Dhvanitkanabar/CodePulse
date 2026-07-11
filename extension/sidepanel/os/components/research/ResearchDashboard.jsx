import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListTree, Search, ChevronDown, ChevronUp, Copy, Download, Bookmark, AlertCircle } from 'lucide-react';

export const ResearchDashboard = () => {
    const [isAnalysed, setIsAnalysed] = useState(false);
    const [isAnalysing, setIsAnalysing] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [researchData, setResearchData] = useState([]);
    const [error, setError] = useState(null);

    const handleAnalyse = () => {
        setIsAnalysing(true);
        setError(null);

        // Simulate API call for deep analysis
        setTimeout(() => {
            setResearchData([
                { id: '1', title: 'Core Entities', content: 'Extracted key entities include: React, Webpack, Babel. These are the foundational tools identified.' },
                { id: '2', title: 'Main Arguments', content: 'The primary argument of the page is that modern web tooling requires significant configuration overhead.' },
                { id: '3', title: 'Statistical Claims', content: 'Identified 3 statistical claims. Claim 1: "95% of developers use React." (Unverified)' },
            ]);
            setExpandedSections({ '1': true, '2': true });
            setIsAnalysed(true);
            setIsAnalysing(false);
        }, 2000);
    };

    const toggleSection = (id) => {
        setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const copySection = (e, text) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="h-full overflow-y-auto pb-20">
            <header className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <ListTree className="w-8 h-8 text-fuchsia-400" />
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Research Mode</h1>
                </div>
                <p className="text-slate-400">Extract structured intelligence, entities, and claims from the active context.</p>
            </header>

            {!isAnalysed ? (
                <div className="bg-[#101226]/50 border border-white/5 rounded-2xl p-12 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-fuchsia-500/10 rounded-full flex items-center justify-center mb-6 border border-fuchsia-500/20">
                        <Search className="w-10 h-10 text-fuchsia-400" />
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-white">Begin Deep Analysis</h2>
                    <p className="text-slate-400 mb-8 max-w-sm">
                        NeuroLens will scan the active context for key claims, entities, statistics, and potential biases to generate a structured research report.
                    </p>
                    <button 
                        onClick={handleAnalyse}
                        disabled={isAnalysing}
                        className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 rounded-xl font-medium shadow-lg shadow-fuchsia-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isAnalysing ? 'Analyzing Context...' : 'Analyze Context'}
                    </button>
                </div>
            ) : (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="flex justify-end gap-2 mb-6">
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium flex items-center gap-2 border border-white/5 transition-colors">
                            <Copy className="w-4 h-4" /> Copy All
                        </button>
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium flex items-center gap-2 border border-white/5 transition-colors">
                            <Download className="w-4 h-4" /> Export
                        </button>
                    </div>

                    {researchData.map((section) => (
                        <div key={section.id} className="bg-[#101226]/50 border border-white/5 rounded-xl overflow-hidden backdrop-blur-md">
                            <div 
                                onClick={() => toggleSection(section.id)}
                                className={`p-4 flex justify-between items-center cursor-pointer transition-colors ${
                                    expandedSections[section.id] ? 'bg-fuchsia-500/10 border-b border-fuchsia-500/20' : 'hover:bg-white/5'
                                }`}
                            >
                                <span className={`font-semibold ${expandedSections[section.id] ? 'text-fuchsia-400' : 'text-slate-200'}`}>
                                    {section.title}
                                </span>
                                <div className="flex items-center gap-4">
                                    {expandedSections[section.id] && (
                                        <button 
                                            onClick={(e) => copySection(e, section.content)} 
                                            className="p-1.5 hover:bg-white/10 rounded-md text-slate-400 hover:text-white transition-colors"
                                            title="Copy section"
                                        >
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    )}
                                    {expandedSections[section.id] ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                                </div>
                            </div>
                            
                            <AnimatePresence>
                                {expandedSections[section.id] && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 text-slate-300 leading-relaxed whitespace-pre-wrap text-sm">
                                            {section.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

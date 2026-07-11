import React, { useState } from 'react';
import { ShieldCheck, Activity, Users, Lock, Key, Server, ToggleLeft, ToggleRight } from 'lucide-react';

export const AdminDashboard = () => {
    const [settings, setSettings] = useState({
        webSearch: true,
        localFiles: false,
        memoryPersistence: true,
    });

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="h-full overflow-y-auto pb-20">
            <header className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-8 h-8 text-white" />
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                </div>
                <p className="text-slate-400">Enterprise controls, telemetry, and security policies.</p>
            </header>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#111111] border border-surface-700 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-slate-400 mb-3">
                        <Activity className="w-4 h-4 text-white" />
                        <span className="text-xs uppercase tracking-wider font-semibold">Tokens Used</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">142.5k</div>
                    <div className="text-xs text-white flex items-center gap-1">
                        <span className="font-bold">↑ 12%</span> vs last week
                    </div>
                </div>
                <div className="bg-[#111111] border border-surface-700 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-slate-400 mb-3">
                        <Users className="w-4 h-4 text-white" />
                        <span className="text-xs uppercase tracking-wider font-semibold">Active Agents</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">4</div>
                    <div className="text-xs text-slate-500">Currently running</div>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Lock className="w-4 h-4 text-white" /> Security Policies
                    </h3>
                    <div className="bg-[#111111] border border-surface-700 rounded-xl overflow-hidden">
                        {[
                            { id: 'webSearch', label: 'Allow Global Web Search', desc: 'Permit agents to crawl external domains' },
                            { id: 'localFiles', label: 'Local File System Access', desc: 'Allow reading from local workspace' },
                            { id: 'memoryPersistence', label: 'Memory Persistence', desc: 'Save conversation embeddings to disk' },
                        ].map((policy, idx) => (
                            <div key={policy.id} className={`p-4 flex items-center justify-between ${idx !== 2 ? 'border-b border-surface-700' : ''}`}>
                                <div>
                                    <div className="text-slate-200 font-medium">{policy.label}</div>
                                    <div className="text-xs text-slate-500">{policy.desc}</div>
                                </div>
                                <button onClick={() => toggleSetting(policy.id)} className="transition-transform active:scale-95">
                                    {settings[policy.id] 
                                        ? <ToggleRight className="w-8 h-8 text-white" /> 
                                        : <ToggleLeft className="w-8 h-8 text-slate-600" />
                                    }
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Server className="w-4 h-4 text-white" /> Infrastructure
                    </h3>
                    <div className="bg-[#111111] border border-surface-700 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-300 font-medium text-sm">Primary LLM Provider</span>
                            <span className="px-2 py-0.5 bg-[#151515] border border-surface-700 text-white text-xs rounded font-bold">Google Gemini</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-300 font-medium text-sm">Vector Database</span>
                            <span className="px-2 py-0.5 bg-[#151515] border border-surface-700 text-white text-xs rounded font-bold">ChromaDB</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-300 font-medium text-sm">Node Connection</span>
                            <span className="flex items-center gap-1.5 text-xs text-white font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span> wss://eu-west-1.neurolens.ai
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

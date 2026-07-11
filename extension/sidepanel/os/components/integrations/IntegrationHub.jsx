import React, { useState } from 'react';
import { Puzzle, Github, Slack, Box, ExternalLink, RefreshCw, CheckCircle, Database } from 'lucide-react';

export const IntegrationHub = () => {
    const [isSyncing, setIsSyncing] = useState(false);

    const integrations = [
        { id: 'github', name: 'GitHub', icon: Github, description: 'Connect repositories for PR reviews and code analysis', status: 'connected', color: 'text-white' },
        { id: 'notion', name: 'Notion', icon: Box, description: 'Sync knowledge base and documentation', status: 'disconnected', color: 'text-slate-200' },
        { id: 'slack', name: 'Slack', icon: Slack, description: 'Send automation alerts to channels', status: 'disconnected', color: 'text-rose-400' },
        { id: 'drive', name: 'Google Drive', icon: Database, description: 'Index documents and spreadsheets for research', status: 'disconnected', color: 'text-blue-400' }
    ];

    const handleSync = () => {
        setIsSyncing(true);
        setTimeout(() => setIsSyncing(false), 2000);
    };

    return (
        <div className="h-full overflow-y-auto pb-20">
            <header className="mb-8 flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Puzzle className="w-8 h-8 text-orange-400" />
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">Integration Hub</h1>
                    </div>
                    <p className="text-slate-400">Connect third-party apps to enhance NeuroLens capabilities.</p>
                </div>
                <button 
                    onClick={handleSync}
                    disabled={isSyncing}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors disabled:opacity-50"
                    title="Sync Data"
                >
                    <RefreshCw className={`w-5 h-5 ${isSyncing ? 'animate-spin text-orange-400' : ''}`} />
                </button>
            </header>

            <div className="grid gap-4">
                {integrations.map((app) => {
                    const Icon = app.icon;
                    const isConnected = app.status === 'connected';

                    return (
                        <div key={app.id} className="bg-[#101226]/50 border border-white/5 rounded-xl p-5 flex items-center justify-between group hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-black/40 border border-white/10 shadow-inner`}>
                                    <Icon className={`w-6 h-6 ${app.color}`} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-slate-200">{app.name}</h3>
                                        {isConnected && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                                    </div>
                                    <p className="text-sm text-slate-400 mt-0.5">{app.description}</p>
                                </div>
                            </div>
                            
                            <button 
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                                    isConnected 
                                    ? 'bg-white/5 text-slate-300 hover:bg-rose-500/20 hover:text-rose-400 hover:border-rose-500/50 border border-transparent' 
                                    : 'bg-orange-500/20 text-orange-400 hover:bg-orange-500 hover:text-white border border-orange-500/50'
                                }`}
                            >
                                {isConnected ? 'Disconnect' : 'Connect'}
                                {!isConnected && <ExternalLink className="w-3.5 h-3.5" />}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

import React, { useState } from 'react';
import { Puzzle, Github, Slack, Box, ExternalLink, RefreshCw, CheckCircle, Database } from 'lucide-react';

export const IntegrationHub = () => {
    const [isSyncing, setIsSyncing] = useState(false);

    const integrations = [
        { id: 'github', name: 'GitHub', icon: Github, description: 'Connect repositories for PR reviews and code analysis', status: 'connected', color: 'text-white' },
        { id: 'notion', name: 'Notion', icon: Box, description: 'Sync knowledge base and documentation', status: 'disconnected', color: 'text-white' },
        { id: 'slack', name: 'Slack', icon: Slack, description: 'Send automation alerts to channels', status: 'disconnected', color: 'text-white' },
        { id: 'drive', name: 'Google Drive', icon: Database, description: 'Index documents and spreadsheets for research', status: 'disconnected', color: 'text-white' }
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
                        <Puzzle className="w-8 h-8 text-white" />
                        <h1 className="text-3xl font-bold text-white">Integration Hub</h1>
                    </div>
                    <p className="text-slate-400">Connect third-party apps to enhance NeuroLens capabilities.</p>
                </div>
                <button 
                    onClick={handleSync}
                    disabled={isSyncing}
                    className="p-2 bg-transparent hover:bg-[#151515] border border-surface-700 rounded-lg text-slate-400 hover:text-white transition-colors disabled:opacity-50"
                    title="Sync Data"
                >
                    <RefreshCw className={`w-5 h-5 ${isSyncing ? 'animate-spin text-white' : ''}`} />
                </button>
            </header>

            <div className="grid gap-4">
                {integrations.map((app) => {
                    const Icon = app.icon;
                    const isConnected = app.status === 'connected';

                    return (
                        <div key={app.id} className="bg-[#111111] border border-surface-700 rounded-xl p-5 flex items-center justify-between group hover:bg-[#151515] transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-black border border-surface-700`}>
                                    <Icon className={`w-6 h-6 text-white`} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-slate-200">{app.name}</h3>
                                        {isConnected && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                                    </div>
                                    <p className="text-sm text-slate-400 mt-0.5">{app.description}</p>
                                </div>
                            </div>
                            
                            <button 
                                className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                                    isConnected 
                                    ? 'bg-[#151515] text-slate-300 hover:bg-black hover:text-white border border-surface-700' 
                                    : 'bg-white text-black hover:bg-[#e5e5e5] border border-white font-semibold'
                                }`}
                            >
                                {isConnected ? 'Disconnect' : 'Connect'}
                                {!isConnected && <ExternalLink className="w-3.5 h-3.5 text-black" />}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

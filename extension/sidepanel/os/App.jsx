import React, { useEffect } from 'react';
import { useAppStore } from './store/useAppStore';
import { EventBus } from './utils/EventBus';
import { OnboardingGuide } from './components/OnboardingGuide';
import './styles/content.css';

// Lazy loading all massive integration modules
const ResearchDashboard = React.lazy(() => import('./components/research/ResearchDashboard').then(module => ({ default: module.ResearchDashboard })));
const DeveloperCopilot = React.lazy(() => import('./components/developer/SystemInspector').then(module => ({ default: module.SystemInspector })));
const WritingPanel = React.lazy(() => import('./components/writing/WritingPanel').then(module => ({ default: module.WritingPanel })));
const EnterpriseDashboard = React.lazy(() => import('./components/enterprise/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const AssistantPanel = React.lazy(() => import('./components/assistant/AssistantPanel').then(module => ({ default: module.AssistantPanel })));
const IntegrationHub = React.lazy(() => import('./components/integrations/IntegrationHub').then(module => ({ default: module.IntegrationHub })));
import Panel from './components/Panel';

import { useState } from 'react';
import { Bot, FlaskConical, Code2, PenTool, Puzzle, ShieldCheck } from 'lucide-react';

export const App = () => {
    const { isAuthenticated, setUser, setAgentState } = useAppStore();
    const [activeTab, setActiveTab] = useState('assistant');

    useEffect(() => {
        // Core integration with backend
        fetch('http://localhost:5000/api/auth/me')
            .then(res => res.json())
            .then(data => setUser(data.user))
            .catch(() => {
                console.log('Backend not running, falling back to local auth mode.');
                setUser({ id: 'guest', name: 'Demo User' });
            });

        // Bind global EventBus
        EventBus.on('AGENT_STATUS_CHANGED', (status) => setAgentState(status));
        
        return () => {
            EventBus.off('AGENT_STATUS_CHANGED');
        };
    }, []);

    if (!isAuthenticated) return <div className="p-4 text-slate-400">Authenticating...</div>;

    const navItems = [
        { id: 'assistant', icon: Bot, label: 'Assistant' },
        { id: 'research', icon: FlaskConical, label: 'Research' },
        { id: 'copilot', icon: Code2, label: 'Copilot' },
        { id: 'writing', icon: PenTool, label: 'Writing' },
        { id: 'integrations', icon: Puzzle, label: 'Hub' },
        { id: 'admin', icon: ShieldCheck, label: 'Admin' }
    ];

    return (
        <div className="flex flex-col h-screen w-full bg-black text-white overflow-hidden relative font-sans">
            <React.Suspense fallback={<div className="flex items-center justify-center h-full text-white">Booting NeuroLens OS...</div>}>
                <OnboardingGuide />
                
                {/* 1. GLOBAL HEADER */}
                <header className="shrink-0 h-14 flex items-center justify-between px-4 bg-[#111111] border-b border-surface-700 z-50">
                    <div className="flex items-center gap-3">
                        <Bot className="w-5 h-5 text-white" />
                        <span className="font-bold text-sm tracking-wide text-white">NeuroLens AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="px-2.5 py-1 rounded-full bg-[#111111] border border-surface-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                            <span className="text-[10px] text-white font-bold tracking-wider">ONLINE</span>
                        </div>
                    </div>
                </header>

                {/* MIDDLE SECTION: SIDEBAR + MAIN AREA */}
                <div className="flex flex-1 overflow-hidden relative">
                    
                    {/* COLLAPSIBLE SIDEBAR */}
                    <div className="w-16 flex flex-col items-center py-4 gap-4 bg-[#090909] border-r border-surface-700 z-40">
                        {navItems.map(item => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`relative p-2.5 rounded-xl transition-all group ${
                                        isActive ? 'bg-white text-black font-semibold' : 'text-slate-500 hover:bg-[#151515] hover:text-white'
                                    }`}
                                    title={item.label}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-slate-500 group-hover:text-white'}`} />
                                    {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-black rounded-r-full" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* MAIN AREA */}
                    <div className="flex-1 flex flex-col overflow-hidden bg-black">
                        <div className="flex-1 overflow-y-auto relative p-4 scrollbar-hide">
                            {activeTab === 'assistant' && <Panel page={{ title: "NeuroLens System", url: "about:blank", paragraphs: [] }} onClose={() => {}} />}
                            {activeTab === 'research' && <ResearchDashboard />}
                            {activeTab === 'copilot' && <DeveloperCopilot />}
                            {activeTab === 'writing' && <WritingPanel />}
                            {activeTab === 'integrations' && <IntegrationHub />}
                            {activeTab === 'admin' && <EnterpriseDashboard />}
                        </div>
                    </div>
                </div>

                {/* GLOBAL BOTTOM INPUT */}
                {/* Note: the actual input logic will be built here, for now it wraps Panel's input logically */}
            </React.Suspense>
        </div>
    );
};

export default App;

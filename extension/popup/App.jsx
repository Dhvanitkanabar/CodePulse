import React, { useEffect, useState } from 'react';
import { Bot, PanelRightOpen, LayoutDashboard, Sparkles } from 'lucide-react';
import './popup.css';

const App = () => {
  const [activeTabUrl, setActiveTabUrl] = useState('Loading context...');

  useEffect(() => {
    const fetchTab = async () => {
      try {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0];
        if (tab) {
          setActiveTabUrl(tab.title || tab.url);
        }
      } catch (err) {
        setActiveTabUrl('Unable to fetch tab info');
      }
    };
    fetchTab();
  }, []);

  const openSidePanel = async () => {
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const currentTab = tabs[0];
      if (currentTab && chrome.runtime.sendMessage) {
        await new Promise((resolve) => {
          chrome.runtime.sendMessage(
            { action: 'TOGGLE_SIDEPANEL', payload: { windowId: currentTab.windowId } },
            resolve
          );
        });
        window.close();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const openDashboard = () => {
    window.open('http://localhost:5173');
    window.close();
  };

  return (
    <div className="w-[360px] bg-[#0a0c1a] text-[#e8efff] font-sans overflow-hidden">
      {/* Header */}
      <div className="relative p-5 bg-gradient-to-br from-indigo-950/50 to-[#0a0c1a] border-b border-white/5">
        <div className="absolute top-0 right-0 p-4 opacity-10 blur-xl pointer-events-none">
          <Sparkles className="w-24 h-24 text-blue-500" />
        </div>
        
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Bot className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              NeuroLens AI
            </h1>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] text-emerald-400 font-bold tracking-wider">ONLINE</span>
          </div>
        </div>
      </div>

      <main className="p-5 space-y-5">
        {/* Context Card */}
        <div className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden group hover:border-blue-500/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            Current Context
          </h2>
          <p className="text-sm text-slate-200 font-medium truncate" title={activeTabUrl}>
            {activeTabUrl}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button 
            onClick={openSidePanel}
            className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-500 ease-in-out"></div>
            <PanelRightOpen className="w-5 h-5 relative z-10" />
            <span className="relative z-10 text-sm">Open Side Panel</span>
          </button>
          
          <button 
            onClick={openDashboard}
            className="w-full bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 hover:text-white font-medium py-3.5 px-4 rounded-xl border border-white/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <LayoutDashboard className="w-5 h-5 opacity-70" />
            <span className="text-sm">Open Dashboard Server</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;

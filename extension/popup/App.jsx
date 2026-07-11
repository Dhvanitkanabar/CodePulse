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
    <div className="w-[360px] bg-black text-white font-sans overflow-hidden">
      {/* Header */}
      <div className="relative p-5 bg-[#111111] border-b border-surface-700">
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#151515] text-white border border-surface-700">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold text-white">
              NeuroLens AI
            </h1>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#111111] border border-surface-700">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] text-white font-bold tracking-wider">ONLINE</span>
          </div>
        </div>
      </div>

      <main className="p-5 space-y-5">
        {/* Context Card */}
        <div className="relative p-4 rounded-2xl bg-[#111111] border border-surface-700 overflow-hidden group hover:border-white transition-colors">
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
            className="w-full relative group overflow-hidden bg-white text-black font-semibold py-3.5 px-4 rounded-xl transition-all hover:bg-[#e5e5e5] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <PanelRightOpen className="w-5 h-5 relative z-10 text-black" />
            <span className="relative z-10 text-sm">Open Side Panel</span>
          </button>
          
          <button 
            onClick={openDashboard}
            className="w-full bg-[#111111] hover:bg-[#151515] text-slate-300 hover:text-white font-medium py-3.5 px-4 rounded-xl border border-surface-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
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

import React, { useEffect } from 'react';
import { useAppStore } from './store/useAppStore';
import { EventBus } from './utils/EventBus';

// Lazy loading all massive integration modules
const ResearchDashboard = React.lazy(() => import('./components/research/ResearchDashboard').then(module => ({ default: module.ResearchDashboard })));
const DeveloperCopilot = React.lazy(() => import('./components/developer/SystemInspector').then(module => ({ default: module.SystemInspector })));
const WritingPanel = React.lazy(() => import('./components/writing/WritingPanel').then(module => ({ default: module.WritingPanel })));
const EnterpriseDashboard = React.lazy(() => import('./components/enterprise/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const AssistantPanel = React.lazy(() => import('./components/assistant/AssistantPanel').then(module => ({ default: module.AssistantPanel })));
const IntegrationHub = React.lazy(() => import('./components/integrations/IntegrationHub').then(module => ({ default: module.IntegrationHub })));

export const App = () => {
    const { isAuthenticated, setUser, setAgentState } = useAppStore();

    useEffect(() => {
        // Core integration with backend
        fetch('/api/auth/me')
            .then(res => res.json())
            .then(data => setUser(data.user))
            .catch(() => console.log('Not authenticated'));

        // Bind global EventBus
        EventBus.on('AGENT_STATUS_CHANGED', (status) => setAgentState(status));
        
        return () => {
            EventBus.off('AGENT_STATUS_CHANGED');
        };
    }, []);

    if (!isAuthenticated) return <div>Authenticating...</div>;

    return (
        <div className="neurolens-os">
            <React.Suspense fallback={<div>Loading OS...</div>}>
                <AssistantPanel />
                <div className="main-content">
                    <ResearchDashboard />
                    <DeveloperCopilot />
                    <WritingPanel />
                    <IntegrationHub />
                    <EnterpriseDashboard />
                </div>
            </React.Suspense>
        </div>
    );
};

export default App;

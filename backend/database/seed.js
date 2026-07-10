export const seedDemoData = () => {
    if (process.env.NODE_ENV !== 'demo') return;
    
    console.log('Seeding Demo Workspace: "NeuroLens Hackathon Environment"');
    const demoKnowledgeGraph = [
        { id: 1, label: 'React.js', group: 'Technology' },
        { id: 2, label: 'Zustand', group: 'Technology' },
        { id: 3, label: 'Multi-Agent Orchestrator', group: 'Architecture' }
    ];
    const demoWorkflows = [
        { name: 'Morning Research Briefing', trigger: '08:00 AM' },
        { name: 'Git Commit Summarizer', trigger: 'onCommit' }
    ];
    console.log('Knowledge Graph Nodes:', demoKnowledgeGraph.length);
    console.log('Automated Workflows:', demoWorkflows.length);
    console.log('Demo Mode fully initialized.');
};

seedDemoData();

export const agentRegistry = {
    agents: new Map(),
    register: (name, agent) => agentRegistry.agents.set(name, agent)
};

export const agentMemory = {
    memory: {},
    save: (key, value) => { agentMemory.memory[key] = value; }
};

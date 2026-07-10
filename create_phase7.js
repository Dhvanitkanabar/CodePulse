const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/dhvan/Desktop/HackSprint/CodePulse';
const agentDir = path.join(rootDir, 'extension', 'agent');
const storeDir = path.join(rootDir, 'frontend', 'src', 'store');
const compDir = path.join(rootDir, 'frontend', 'src', 'components', 'agent');

[agentDir, storeDir, compDir].forEach(d => fs.mkdirSync(d, { recursive: true }));

// 1. Core Agent Engine
const coreFiles = {
    'index.js': `export * from './agentEngine.js';`,
    'agentEngine.js': `export class AgentEngine { start() {} stop() {} }`,
    'agentRegistry.js': `export const agentRegistry = new Map();`,
    'agentEvents.js': `export const AGENT_EVENTS = { STARTED: 'AGENT_STARTED', ACTION_FINISHED: 'ACTION_FINISHED' };`,
    'agentLogger.js': `export const logAgent = (msg) => console.log('[Agent]', msg);`
};

// 2. Intent & Planning
const planFiles = {
    'intentDetector.js': `export const detectIntent = (text) => { return { action: 'click', target: text }; };`,
    'taskPlanner.js': `export const planTask = (intent) => { return [intent]; };`,
    'actionPlanner.js': `export const planActionSeq = (task) => { return task; };`
};

// 3. DOM & Element Finder
const domFiles = {
    'domAnalyzer.js': `export const analyzeDOM = () => { return document.body; };`,
    'elementFinder.js': `export const findElement = (selector) => { return document.querySelector(selector); };`,
    'selectorGenerator.js': `export const generateSelectors = (el) => { return ['xpath', 'css']; };`,
    'selectorRanker.js': `export const rankSelectors = (selectors) => { return selectors; };`
};

// 4. Execution & Queue
const execFiles = {
    'actionQueue.js': `export class ActionQueue { constructor() { this.queue = []; } enqueue(a) { this.queue.push(a); } }`,
    'actionRunner.js': `export const runAction = async (action) => { return true; };`,
    'actionHistory.js': `export const history = [];`,
    'browserExecutor.js': `export const executeBrowserAction = (action) => { return true; };`
};

// 5. Safety & Verification
const safeFiles = {
    'verificationEngine.js': `export const verifyAction = (action) => { return true; };`,
    'permissionManager.js': `export const requirePermission = (action) => { return true; };`,
    'rollbackManager.js': `export const rollbackAction = (action) => { return true; };`,
    'safeExecution.js': `export const executeSafely = (action) => { return true; };`,
    'pageObserver.js': `export const observePage = () => {};`,
    'mutationObserver.js': `export const watchMutations = () => {};`
};

Object.assign(coreFiles, planFiles, domFiles, execFiles, safeFiles);
Object.entries(coreFiles).forEach(([name, content]) => fs.writeFileSync(path.join(agentDir, name), content));

// 6. Frontend Stores & Components
const frontendFiles = {
    [path.join(storeDir, 'useAgentStore.js')]: `import { create } from 'zustand';
export const useAgentStore = create((set) => ({ currentTask: null, queue: [], status: 'idle' }));`,
    [path.join(compDir, 'AgentPanel.jsx')]: `import React from 'react';\nexport const AgentPanel = () => <div>Agent Panel</div>;`,
    [path.join(compDir, 'ExecutionLog.jsx')]: `import React from 'react';\nexport const ExecutionLog = () => <div>Execution Log</div>;`,
    [path.join(compDir, 'QueueViewer.jsx')]: `import React from 'react';\nexport const QueueViewer = () => <div>Queue Viewer</div>;`,
    [path.join(compDir, 'FloatingOrb.jsx')]: `import React from 'react';\nexport const FloatingOrb = () => <div>Orb</div>;`
};

Object.entries(frontendFiles).forEach(([file, content]) => fs.writeFileSync(file, content));

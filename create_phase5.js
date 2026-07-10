const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/dhvan/Desktop/HackSprint/CodePulse';
const dbDir = path.join(rootDir, 'backend', 'db');
const memDir = path.join(rootDir, 'backend', 'services', 'memory');
const routesDir = path.join(rootDir, 'backend', 'routes');
const storeDir = path.join(rootDir, 'frontend', 'src', 'store');

[dbDir, memDir, routesDir, storeDir].forEach(d => fs.mkdirSync(d, { recursive: true }));

// 1. Database Abstraction (JSON based)
const dbCode = `const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '../../../data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

async function initDb() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
        try {
            await fs.access(DB_FILE);
        } catch {
            const schema = {
                conversations: [], messages: [], workspaces: [],
                memories: [], knowledgeNodes: [], knowledgeEdges: [],
                folders: [], tags: [], bookmarks: [], pinnedItems: [],
                recentActivity: [], documents: [], browserSessions: []
            };
            await fs.writeFile(DB_FILE, JSON.stringify(schema, null, 2));
        }
    } catch (e) { console.error('DB Init Error', e); }
}

async function readDb() {
    await initDb();
    const data = await fs.readFile(DB_FILE, 'utf8');
    return JSON.parse(data);
}

async function writeDb(data) {
    await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

export const dbService = {
    async getCollection(name) {
        const db = await readDb();
        return db[name] || [];
    },
    async insert(collection, item) {
        const db = await readDb();
        if (!db[collection]) db[collection] = [];
        item.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
        item.createdAt = new Date().toISOString();
        db[collection].push(item);
        await writeDb(db);
        return item;
    },
    async update(collection, id, updates) {
        const db = await readDb();
        if (!db[collection]) return null;
        const index = db[collection].findIndex(i => i.id === id);
        if (index > -1) {
            db[collection][index] = { ...db[collection][index], ...updates, updatedAt: new Date().toISOString() };
            await writeDb(db);
            return db[collection][index];
        }
        return null;
    },
    async remove(collection, id) {
        const db = await readDb();
        if (!db[collection]) return false;
        const initialLen = db[collection].length;
        db[collection] = db[collection].filter(i => i.id !== id);
        await writeDb(db);
        return db[collection].length < initialLen;
    }
};`;

fs.writeFileSync(path.join(dbDir, 'database.js'), dbCode);

// 2. Memory Services
const memFiles = {
    'memoryEngine.js': `export const runMemoryPipeline = async (context) => { return { status: 'processed' }; };`,
    'memoryClassifier.js': `export const classifyMemory = (text) => { return 'permanent'; };`,
    'memoryRetriever.js': `export const retrieveRelevantMemory = async (query) => { return []; };`,
    'memoryScorer.js': `export const scoreMemory = (memory) => { return 1.0; };`,
    'memoryMerger.js': `export const mergeMemories = async (newMem, existing) => { return newMem; };`,
    'memoryCleaner.js': `export const cleanOldMemories = async () => {};`,
    'memoryScheduler.js': `export const scheduleTasks = () => {};`,
    'memorySearch.js': `export const searchMemories = async (query) => { return []; };`,
    'memoryTimeline.js': `export const getTimeline = async () => { return []; };`,
    'memoryExport.js': `export const exportMemoryData = async () => { return {}; };`,
    'memoryImport.js': `export const importMemoryData = async (data) => {};`,
    'memoryStats.js': `export const getMemoryStats = async () => { return { totalNodes: 0, totalEdges: 0 }; };`
};

Object.entries(memFiles).forEach(([name, content]) => fs.writeFileSync(path.join(memDir, name), content));

// 3. API Routes
const routeFiles = {
    'memoryRoutes.js': `import { dbService } from '../db/database.js';
export const getMemories = async (req, res) => { const mems = await dbService.getCollection('memories'); res.json(mems); };`,
    'workspaceRoutes.js': `import { dbService } from '../db/database.js';
export const getWorkspaces = async (req, res) => { const ws = await dbService.getCollection('workspaces'); res.json(ws); };`,
    'knowledgeRoutes.js': `import { dbService } from '../db/database.js';
export const getNodes = async (req, res) => { const nodes = await dbService.getCollection('knowledgeNodes'); res.json(nodes); };`,
    'searchRoutes.js': `export const search = async (req, res) => { res.json({ results: [] }); };`
};

Object.entries(routeFiles).forEach(([name, content]) => fs.writeFileSync(path.join(routesDir, name), content));

// 4. Frontend Stores
const stores = {
    'useMemoryStore.js': `import { create } from 'zustand';
export const useMemoryStore = create((set) => ({ memories: [], addMemory: (m) => set(s => ({ memories: [...s.memories, m] })) }));`,
    'useWorkspaceStore.js': `import { create } from 'zustand';
export const useWorkspaceStore = create((set) => ({ workspaces: [], addWorkspace: (w) => set(s => ({ workspaces: [...s.workspaces, w] })) }));`,
    'useKnowledgeStore.js': `import { create } from 'zustand';
export const useKnowledgeStore = create((set) => ({ nodes: [], edges: [], addNode: (n) => set(s => ({ nodes: [...s.nodes, n] })) }));`
};

Object.entries(stores).forEach(([name, content]) => fs.writeFileSync(path.join(storeDir, name), content));

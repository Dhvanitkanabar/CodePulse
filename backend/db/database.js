const fs = require('fs').promises;
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
};
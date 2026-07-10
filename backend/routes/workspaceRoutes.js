import { dbService } from '../db/database.js';
export const getWorkspaces = async (req, res) => { const ws = await dbService.getCollection('workspaces'); res.json(ws); };
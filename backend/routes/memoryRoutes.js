import { dbService } from '../db/database.js';
export const getMemories = async (req, res) => { const mems = await dbService.getCollection('memories'); res.json(mems); };
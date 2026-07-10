import { dbService } from '../db/database.js';
export const getNodes = async (req, res) => { const nodes = await dbService.getCollection('knowledgeNodes'); res.json(nodes); };
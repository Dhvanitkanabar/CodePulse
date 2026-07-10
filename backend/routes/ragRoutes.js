export const ingestDocument = async (req, res) => { res.json({ status: 'ingested' }); };
export const searchRAG = async (req, res) => { res.json({ results: [] }); };
export const getStatus = async (req, res) => { res.json({ status: 'online' }); };
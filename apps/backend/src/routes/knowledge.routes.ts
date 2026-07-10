import { Router } from 'express';
import * as knowledgeController from '../controllers/knowledge.controller';

const router = Router();

router.get('/nodes', knowledgeController.getNodes);
router.get('/nodes/:id', knowledgeController.getNode);
router.post('/nodes', knowledgeController.createNode);
router.get('/graph', knowledgeController.getGraph);
router.delete('/nodes/:id', knowledgeController.deleteNode);

export default router;

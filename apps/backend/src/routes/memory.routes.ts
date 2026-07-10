import { Router } from 'express';
import * as memoryController from '../controllers/memory.controller';

const router = Router();

router.get('/', memoryController.getMemories);
router.post('/', memoryController.createMemory);
router.get('/search', memoryController.searchMemories);
router.delete('/:id', memoryController.deleteMemory);

export default router;

import { Router } from 'express';
import * as historyController from '../controllers/history.controller';

const router = Router();

router.get('/', historyController.getHistory);
router.get('/stats', historyController.getHistoryStats);
router.get('/:id', historyController.getHistoryItem);
router.post('/', historyController.addHistoryItem);
router.delete('/:id', historyController.deleteHistoryItem);

export default router;

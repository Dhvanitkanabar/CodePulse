import { Router } from 'express';
import * as chatController from '../controllers/chat.controller';

const router = Router();

router.get('/', chatController.getConversations);
router.get('/:id', chatController.getConversation);
router.post('/', chatController.createConversation);
router.post('/:id/message', chatController.sendMessage);
router.delete('/:id', chatController.deleteConversation);

export default router;

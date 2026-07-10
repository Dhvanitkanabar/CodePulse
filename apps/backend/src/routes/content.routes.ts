import { Router } from 'express';
import * as contentController from '../controllers/content.controller';

const router = Router();

router.post('/extract', contentController.extractContent);
router.post('/summarize', contentController.summarizeContent);
router.post('/analyze', contentController.analyzeWebsite);

export default router;

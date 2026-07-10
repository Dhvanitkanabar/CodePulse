import { Router } from 'express';
import * as analyticsController from '../controllers/analytics.controller';

const router = Router();

router.get('/overview', analyticsController.getOverview);
router.get('/usage', analyticsController.getUsageStats);
router.get('/reading', analyticsController.getReadingStats);

export default router;

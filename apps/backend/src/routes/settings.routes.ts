import { Router } from 'express';
import * as settingsController from '../controllers/settings.controller';

const router = Router();

router.get('/', settingsController.getSettings);
router.patch('/', settingsController.updateSettings);
router.post('/reset', settingsController.resetSettings);

export default router;

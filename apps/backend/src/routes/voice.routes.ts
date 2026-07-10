import { Router } from 'express';
import * as voiceController from '../controllers/voice.controller';

const router = Router();

router.post('/transcribe', voiceController.transcribe);
router.post('/synthesize', voiceController.synthesize);

export default router;

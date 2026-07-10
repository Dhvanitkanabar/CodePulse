import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

export const transcribe = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Transcribe stub' });
};

export const synthesize = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Text-to-speech stub' });
};

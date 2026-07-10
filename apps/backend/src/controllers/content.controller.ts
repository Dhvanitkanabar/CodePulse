import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

export const extractContent = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Extract content stub' });
};

export const summarizeContent = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Summarize content stub' });
};

export const analyzeWebsite = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Analyze website stub' });
};

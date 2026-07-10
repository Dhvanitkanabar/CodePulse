import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

export const getOverview = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get analytics overview stub' });
};

export const getUsageStats = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get usage stats stub' });
};

export const getReadingStats = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get reading stats stub' });
};

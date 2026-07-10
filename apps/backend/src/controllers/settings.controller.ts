import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

export const getSettings = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get settings stub' });
};

export const updateSettings = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Update settings stub' });
};

export const resetSettings = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Reset settings stub' });
};

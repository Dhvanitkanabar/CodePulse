import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

export const getHistory = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get history stub' });
};

export const getHistoryItem = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get history item stub' });
};

export const addHistoryItem = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Add history item stub' }, 201);
};

export const deleteHistoryItem = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Delete history item stub' });
};

export const getHistoryStats = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get history stats stub' });
};

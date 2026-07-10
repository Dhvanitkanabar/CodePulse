import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

export const getMemories = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get memories stub' });
};

export const createMemory = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Create memory stub' }, 201);
};

export const searchMemories = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Search memories stub' });
};

export const deleteMemory = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Delete memory stub' });
};

import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

export const getConversations = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get conversations stub' });
};

export const getConversation = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get conversation stub' });
};

export const createConversation = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Create conversation stub' }, 201);
};

export const sendMessage = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Send message stub' });
};

export const deleteConversation = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Delete conversation stub' });
};

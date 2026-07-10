import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

export const getBookmarks = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get bookmarks stub' });
};

export const getBookmark = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get bookmark stub' });
};

export const createBookmark = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Create bookmark stub' }, 201);
};

export const updateBookmark = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Update bookmark stub' });
};

export const deleteBookmark = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Delete bookmark stub' });
};

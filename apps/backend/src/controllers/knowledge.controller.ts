import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

export const getNodes = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get knowledge nodes stub' });
};

export const getNode = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get knowledge node stub' });
};

export const createNode = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Create knowledge node stub' }, 201);
};

export const getGraph = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Get knowledge graph stub' });
};

export const deleteNode = async (_req: Request, res: Response) => {
  sendSuccess(res, { message: 'Delete knowledge node stub' });
};

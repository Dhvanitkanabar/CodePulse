import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

/** POST /api/auth/register */
export const register = async (_req: Request, res: Response) => {
  // TODO: implement registration
  sendSuccess(res, { message: 'Register endpoint stub' }, 201);
};

/** POST /api/auth/login */
export const login = async (_req: Request, res: Response) => {
  // TODO: implement login
  sendSuccess(res, { message: 'Login endpoint stub' });
};

/** POST /api/auth/logout */
export const logout = async (_req: Request, res: Response) => {
  // TODO: implement logout
  sendSuccess(res, { message: 'Logout endpoint stub' });
};

/** GET /api/auth/me */
export const getMe = async (_req: Request, res: Response) => {
  // TODO: return authenticated user
  sendSuccess(res, { message: 'Get current user stub' });
};

/** POST /api/auth/refresh */
export const refreshToken = async (_req: Request, res: Response) => {
  // TODO: refresh JWT
  sendSuccess(res, { message: 'Refresh token stub' });
};

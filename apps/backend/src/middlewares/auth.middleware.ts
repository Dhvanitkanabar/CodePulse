import type { Request, Response, NextFunction } from 'express';

/**
 * Auth middleware stub — validates JWT and attaches user to request.
 * TODO: Implement JWT verification logic.
 */
export const authenticate = (req: Request, _res: Response, next: NextFunction): void => {
  // Stub: extract token from Authorization header
  const _token = req.headers.authorization?.split(' ')[1];
  // TODO: verify token, attach user to req
  next();
};

/**
 * Role-based authorization middleware stub.
 */
export const authorize = (..._roles: string[]) => {
  return (_req: Request, _res: Response, next: NextFunction): void => {
    // TODO: check user role against allowed roles
    next();
  };
};

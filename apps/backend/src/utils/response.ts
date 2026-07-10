import type { Response } from 'express';

/**
 * Standardized API response helpers.
 */
export const sendSuccess = <T>(res: Response, data: T, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
  });
};

export const sendPaginated = <T>(
  res: Response,
  data: T[],
  meta: { page: number; limit: number; total: number },
) => {
  const totalPages = Math.ceil(meta.total / meta.limit);
  return res.status(200).json({
    success: true,
    data,
    meta: {
      ...meta,
      totalPages,
      hasNext: meta.page < totalPages,
      hasPrev: meta.page > 1,
    },
  });
};

export const sendError = (res: Response, code: string, message: string, statusCode = 400) => {
  return res.status(statusCode).json({
    success: false,
    error: { code, message },
  });
};

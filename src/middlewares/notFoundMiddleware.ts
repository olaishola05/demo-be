import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const error = new Error("Not Found");
  (error as any).status = 404;
  next(error);
};

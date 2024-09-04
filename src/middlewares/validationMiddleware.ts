import { Request, Response, NextFunction } from "express";
import { AnyZodObject, z } from "zod";

const validationMiddleware =
  (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync(req.body);
        next();
      } catch (error: unknown) {
        let err = error;
        if (err instanceof z.ZodError) {
          err = err.issues.map((e: any) => ({
            path: e.path[0],
            message: e.message,
          }));
        }
        res.status(400).json({
          status: "error",
          message: err,
        });
      }
    };

export default validationMiddleware;

import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const validationFields = (
  req: Request,
  res: Response,
  next: Function
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(400).json(errors);

  next();
};

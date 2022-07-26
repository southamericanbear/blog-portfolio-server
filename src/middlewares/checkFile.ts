import { Request, Response } from "express";

export const checkFile = async (
  req: Request | any,
  res: Response | any,
  next: () => void
) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    return res.status(400).send({ msg: "No files were uploaded." });
  }

  next();
};

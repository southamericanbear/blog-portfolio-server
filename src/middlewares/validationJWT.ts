import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const validateJWT = (req: Request, res: Response, next: Function) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }
  const secretKey: any = process.env.JWT_SECRET;
  try {
    const alan = jwt.verify(token, secretKey);
    console.log(alan);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Invalid token",
    });
  }
};

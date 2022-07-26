import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const validationJWT = async (
  req: Request | any,
  res: Response,
  next: Function
) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }
  const secretKey: any = process.env.JWT_SECRET;
  try {
    const { uid }: any = jwt.verify(token, secretKey);
    const authenticationUser = await User.findById(uid);
    if (!authenticationUser) {
      return res.status(401).json({ msg: "user doesn't exists" });
    }
    req.uid = uid;
    req.authenticationUser = authenticationUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Invalid token",
    });
  }
};

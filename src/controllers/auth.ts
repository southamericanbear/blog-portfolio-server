import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import User from "../models/User";
import { generateJWT } from "../utils/generateJWT";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    const validPassword = await bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = await generateJWT(user._id);
    const { name } = user;
    res.status(200).json({
      msg: "Login success",
      name,
      uid: user._id,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const revalidationToken = async (req: Request, res: Response) => {
  const { uid, name } = req.body;
  const token = await generateJWT(uid);
  res.json({
    ok: true,
    msg: "token is valid again dudeeeee",
    uid,
    name,
    token,
  });
};

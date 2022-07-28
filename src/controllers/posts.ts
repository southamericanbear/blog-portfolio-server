import { Request, Response } from "express";
import Post from "../models/Post";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      msg: error,
      txt: "Something happened please reach the admin",
    });
  }
};

export const getPostsByTag = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({ tags: req.params.tag });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      msg: error,
      txt: "Something happened please reach the admin",
    });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(200).json({
      status: "success",
      msg: "Post created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
};

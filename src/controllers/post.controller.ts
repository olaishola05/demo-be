import { Request, Response, NextFunction } from "express";
import { getAllPosts, create } from "../services/post.service";

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await getAllPosts(req, res);
    return posts;
  } catch (error) {
    next(error);
  }
};

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await create(req, res);
    return post;
  } catch (error) {
    next(error);
  }
};

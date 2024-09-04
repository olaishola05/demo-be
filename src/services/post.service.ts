import { PrismaClient, Post } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts: Post[] = await prisma.post.findMany();
    res.status(200).json({
      message: "Posts retrieved successfully",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving posts",
      error,
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const findPost = await prisma.post.findUnique({
      where: {
        title: req.body.title,
      },
    });

    if (findPost) {
      return res.status(400).json({
        error: "Post already exists",
      });
    }

    await prisma.post.create({
      data: req.body,
    });

    res.status(201).json({
      message: "Post created successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating post",
      error,
    });
  }
};
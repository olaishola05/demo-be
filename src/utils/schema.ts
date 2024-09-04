import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .trim()
    .min(10, { message: "Title must be at least 10 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  content: z
    .string({
      required_error: "Content is required",
      invalid_type_error: "Content must be a string",
    })
    .trim()
    .min(10, { message: "Content must be at least 10 character long" }),
  tags: z
    .string({
      required_error: "Tags are required",
      invalid_type_error: "Tags must be an array of strings",
    })
    .array()
    .nonempty({
      message: "Tags cannot be empty",
    })
    .refine((tags) => tags.length > 0, {
      message: "At least one tag is required",
    }),
});

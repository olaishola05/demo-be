import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

const userData = {
  username: "john_doe",
  email: "john@example.com",
};

userSchema.parseAsync(userData);

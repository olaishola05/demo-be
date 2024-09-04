import express, { Response } from "express";
import dotenv from "dotenv";
import postRouter from "./routes/post.router";
import { errorHandler } from "./middlewares/errorHandlerMiddleware";
import { notFoundHandler } from "./middlewares/notFoundMiddleware";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res: Response) => {
  res.json({
    message: "Hello! Welcome to our simple blog API.",
  });
});

app.use("/api/posts", postRouter); // Here is the new post router we added

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

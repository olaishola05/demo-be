import { Router } from 'express';
import { createPost, getPosts } from '../controllers/post.controller';
import validationMiddleware from '../middlewares/validationMiddleware';
import { postSchema } from '../utils';

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.post('/', validationMiddleware(postSchema), createPost);

export default postRouter;

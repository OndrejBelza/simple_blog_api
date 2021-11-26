import { Router } from "express";
import createPostRouter from "./createPost";
import getAllPostsRouter from "./getAllPosts";

const postsRouter = Router();

postsRouter.use(getAllPostsRouter);
postsRouter.use(createPostRouter);

export default postsRouter;

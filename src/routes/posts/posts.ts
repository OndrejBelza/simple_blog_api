import { Router } from "express";
import createPostRouter from "./createPost";
import deletePostRouter from "./deletePost";
import updatePostRouter from "./editPost";
import getAllPostsRouter from "./getAllPosts";

const postsRouter = Router();

postsRouter.use(getAllPostsRouter);
postsRouter.use(createPostRouter);
postsRouter.use(deletePostRouter);
postsRouter.use(updatePostRouter);

export default postsRouter;

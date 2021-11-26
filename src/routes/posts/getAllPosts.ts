import { Router } from "express";
import { Post } from "../../db/models/Post";
const getAllPostsRouter = Router();

getAllPostsRouter.get("", async (_, res) => {
  res.send(await Post.find());
});

export default getAllPostsRouter;

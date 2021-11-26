import { Router } from "express";
import { Post } from "../../db/models/Post";
const deletePostRouter = Router();

deletePostRouter.delete("/:postId", async (req, res) => {
  const postId = req.params.postId;

  const post = await Post.findById(postId);

  if (!post) return res.status(404).send("Post not found");
  else {
    await post.delete();
    return res.send();
  }
});

export default deletePostRouter;

import { Router } from "express";
import { Post } from "../../db/models/Post";
import * as yup from "yup";
const updatePostRouter = Router();

const updatePostSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  categoryId: yup.string().required(),
});

updatePostRouter.put("/:postId", async (req, res) => {
  try {
    const data = await updatePostSchema.validate(req.body);

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).send("Post not found");

    post.title = data.title;
    post.categoryId = data.categoryId;
    post.description = data.description;

    await post.save();

    return res.send(post);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
});

export default updatePostRouter;

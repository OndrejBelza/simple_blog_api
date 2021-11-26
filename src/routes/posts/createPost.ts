import { Router } from "express";
import { Post } from "../../db/models/Post";
import * as yup from "yup";
const createPostRouter = Router();

const newPostSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  categoryId: yup.string().required(),
});

createPostRouter.post("", async (req, res) => {
  try {
    const data = await newPostSchema.validate(req.body);
    const post = await Post.create({ ...data });
    res.send(post);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default createPostRouter;

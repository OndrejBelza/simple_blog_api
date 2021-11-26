import mongoose from "mongoose";
interface Post {
  title: string;
  description: string;
  categoryId: string;
}

export const postSchema = new mongoose.Schema<Post>({
  title: String,
  description: String,
  categoryId: String,
});

export const Post = mongoose.model<Post>("Post", postSchema);

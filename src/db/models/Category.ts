import mongoose from "mongoose";
interface Category {
  name: string;
}

export const categorySchema = new mongoose.Schema<Category>({
  name: String,
});

export const Category = mongoose.model<Category>("Category", categorySchema);

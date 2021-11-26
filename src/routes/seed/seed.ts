import { Router } from "express";
import { Category } from "../../db/models/Category";

const seedRouter = Router();
const categoriesNames = ["general", "dev", "gaming"];
seedRouter.get("", async (_, res) => {
  const categories = await Category.find();

  for (let category of categoriesNames) {
    console.log(category);
    if (categories.every((c) => c.name !== category)) {
      let newCat = new Category({ name: category });
      newCat.save();
    }
  }

  res.send();
});

export default seedRouter;

import { Router } from "express";
import { Category } from "../../db/models/Category";
const getAllRouter = Router();

getAllRouter.get("", async (_, res) => {
  res.send(await Category.find());
});

export default getAllRouter;

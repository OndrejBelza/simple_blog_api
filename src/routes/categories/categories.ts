import { Router } from "express";
import getAllRouter from "./getAllCategories";

const categoriesRouter = Router();

categoriesRouter.use(getAllRouter);

export default categoriesRouter;

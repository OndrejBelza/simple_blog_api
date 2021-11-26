import { Router } from "express";
import authRouter from "./auth/auth";
import categoriesRouter from "./categories/categories";
import postsRouter from "./posts/posts";
import seedRouter from "./seed/seed";

const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/categories", categoriesRouter);
appRouter.use("/seed", seedRouter);
appRouter.use("/posts", postsRouter);

export default appRouter;

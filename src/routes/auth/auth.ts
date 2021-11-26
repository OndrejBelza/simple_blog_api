import { Router } from "express";
import loginRouter from "./login";
import logoutRouter from "./logout";
import meRouter from "./me";
import registerRouter from "./register";

const authRouter = Router();

authRouter.use(registerRouter);
authRouter.use(loginRouter);
authRouter.use(logoutRouter);
authRouter.use(meRouter);

export default authRouter;

import { Router } from "express";
import * as yup from "yup";
import argon2 from "argon2";
import { User } from "../../db/models/User";
import Session from "../../types/session";
const loginRouter = Router();

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

loginRouter.post("/login", async (req, res) => {
  try {
    const data = await loginSchema.validate(req.body);

    const user = await User.findOne({ username: data.username });

    if (!user || !(await argon2.verify(user.password, data.password)))
      return res.status(400).send("Invalid username or password");

    (req.session as Session).userId = user.id;
    return res.send();
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
});

export default loginRouter;

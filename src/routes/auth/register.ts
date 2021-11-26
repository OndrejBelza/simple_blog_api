import { Router } from "express";
import * as yup from "yup";
import argon2 from "argon2";
import { User } from "../../db/models/User";
import Session from "../../types/session";
const registerRouter = Router();

const registerSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

registerRouter.post("/register", async (req, res) => {
  try {
    const data = await registerSchema.validate(req.body);

    const users = await User.find({ username: data.username });

    if (users.length) return res.status(400).send("Username is already used");

    const user = new User({
      username: data.username,
      password: await argon2.hash(data.password),
    });

    await user.save();

    (req.session as Session).userId = user.id;
    return res.send();
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
});

export default registerRouter;

import { Router } from "express";
import { User } from "../../db/models/User";
import Session from "../../types/session";
const meRouter = Router();

meRouter.get("/me", async (req, res) => {
  const userId = (req.session as Session).userId;
  if (!userId) return res.send(null);
  const user = await User.findById(userId);
  if (!user) return res.send(null);
  else return res.send({ username: user.username });
});

export default meRouter;

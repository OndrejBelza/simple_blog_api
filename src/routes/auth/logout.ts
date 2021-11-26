import { Router } from "express";
import { COOKIE_NAME } from "../../constants/Cookies";
const logoutRouter = Router();

logoutRouter.post("/logout", async (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie(COOKIE_NAME);
    if (err) return res.status(500).send("Logout unsuccessful");
    else return res.send();
  });
});

export default logoutRouter;

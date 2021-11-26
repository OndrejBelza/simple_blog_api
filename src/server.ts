import express from "express";
import mongoose from "mongoose";
import "dotenv-safe/config";
import appRouter from "./routes/router";
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import { COOKIE_NAME } from "./constants/Cookies";
import { __prod__ } from "./constants/env";
const port = process.env.PORT || 4000;

const main = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors({ credentials: true, origin: process.env.APP_URL }));
  app.set("trust-proxy", 1);

  console.log("connecting to mongo", process.env.MONGO_URL);
  mongoose.connect(process.env.MONGO_URL as string);

  // creating session middleware
  const sessionMiddleware = session({
    name: COOKIE_NAME,
    secret: process.env.SESSION_SECRET as string,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
      httpOnly: true,
      sameSite: "lax",
      secure: __prod__,
      domain: __prod__ ? process.env.APP_URL : "",
    },
  });

  app.use(sessionMiddleware);

  app.use(appRouter);

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

main().catch(console.error);

import session from "express-session";

type Session = {
  userId: string;
} & session.Session &
  Partial<session.SessionData>;

export default Session;

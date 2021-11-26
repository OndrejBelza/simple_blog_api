declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MONGO_URL: string;
    APP_URL: string;
    SESSION_SECRET: string;
  }
}
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware";
import { authRouter } from "./routes/auth.router";
import "./strategies/jwt.strategy";
import { recipeRouter } from "./routes/recipe.router";
import { userRouter } from "./routes/user.router";

const origins = process.env.NODE_ENV == "development" ? 
  [ "http://localhost:5173", "http://localhost:8000" ] : 
  [];
const app: Application = express();

app.set("trust proxy", true);

app.use(cors({ origin: origins, credentials: true }));
app.use(helmet({ 
  crossOriginResourcePolicy: process.env.NODE_ENV != "development", 
  contentSecurityPolicy: false,
  crossOriginOpenerPolicy: false,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/auth", authRouter);
app.use("/api/recipe", recipeRouter);
app.use("/api/user", userRouter);

app.use(errorHandler);

export default app;
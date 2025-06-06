import express from "express";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectDB from "./src/config/monogos.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import auth_routes from "./src/routes/auth.route.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errrorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
import { attachedUser } from "./src/utils/attachedUser.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
//cors
app.use(cors());

app.use(cookieParser());
app.use(attachedUser)
app.use("/api/create", shortUrl);
app.use("/api/auth", auth_routes);
app.get("/:id", redirectFromShortUrl);
app.use(errrorHandler);
app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});

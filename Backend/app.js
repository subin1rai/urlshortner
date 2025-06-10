import express from "express";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectDB from "./src/config/monogos.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import auth_routes from "./src/routes/auth.route.js";
import user_route from "./src/routes/user.route.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errrorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
import { attachedUser } from "./src/utils/attachedUser.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());

// Add proper MIME type for JavaScript modules
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

//cors
app.use(cors(
  {
    origin: process.env.ORIGIN_URL,
    credentials: true,
  }
));

app.use(cookieParser());
app.use(attachedUser)
app.use("/api/create", shortUrl);
app.use("/api/user", user_route);
app.use("/api/auth", auth_routes);
app.get("/:id", redirectFromShortUrl);
app.use(errrorHandler);
app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});

import express from "express";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectDB from "./src/config/monogos.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errrorHandler } from "./src/utils/errorHandler.js";
const app = express();
app.use(express.json());

app.use("/api/create",shortUrl);

app.get("/:id", redirectFromShortUrl);
app.use(errrorHandler)
app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
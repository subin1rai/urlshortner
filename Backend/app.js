import express from "express";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectDB from "./src/config/monogos.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
const app = express();
app.use(express.json());

app.use("/api/create",shortUrl);

// app.get("/:id", async (req, res) => {
//     const {id} = req.params;
//     const url = await urlschema.findOne({ short_url: id });
//     if (url) {
//         res.redirect(url.full_url);
//     }else{
//         res.status(404).send("URL not found");
//     }
// });

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
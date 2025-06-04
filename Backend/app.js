import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import urlschema from "./src/models/shorturl.model.js";
import connectDB from "./src/config/monogos.config.js";
const app = express();
app.use(express.json());

app.post("/api/create",(req,res)=>{
  const {url} = req.body;
  const shortUrl = nanoid(7);
  const newurl = new urlschema({
    full_url: url,
    short_url: shortUrl,
    user: req.query.user_id 
    });
  newurl.save();
  res.send(shortUrl);

})

app.get("/:id", async (req, res) => {
    const {id} = req.params;
    const url = await urlschema.findOne({ short_url: id });
    if (url) {
        res.redirect(url.full_url);
    }else{
        res.status(404).send("URL not found");
    }
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
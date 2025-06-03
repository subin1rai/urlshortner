import express from "express";
import {nanoid} from "nanoid";

const app = express();
app.use(express.json());

app.get("/api/create",(req,res)=>{
  res.send(nanoid());
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


//get- redirection

//post - create short url
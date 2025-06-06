import { getShortUrl } from "../dao/shortUrl.js";
import {
  createShortUrlWithoutUser,
  createShortUrlWithUser,
} from "../services/shortUrl.service.js";
import wrapAsync from "../utils/tryCatchRapper.js";

export const createShortUrl = wrapAsync(async (req, res, next) => {
  const { url } = req.body;
  if(req.user){
    const shortUrl = await createShortUrlWithUser(url, req.user._id);
  }else{
    const shortUrl = await createShortUrlWithoutUser(url);
  }
  res.status(200).json({shortUrl: process.env.APP_URL + shortUrl});
});

export const redirectFromShortUrl = wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const url = await getShortUrl(id);
  if (!url) {
    throw new Error("Short URL not found");
  }
  res.redirect(url.full_url);
});

export const customCreateShortUrl =wrapAsync(async (req,res)=>{
    const {url, slug} = req.body;
    const shortUrl = await createShortUrlWithOutUser(url, customUrl);
    res.status(200).json({shortUrl: process.env.APP_URL + shortUrl});
});
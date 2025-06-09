 import { getShortUrlByUserId } from "../dao/shortUrl.js";
import wrapAsync from "../utils/tryCatchRapper.js";

export const getAllUserUrls = wrapAsync(async (req, res, next) => {
  const urls = await getShortUrlByUserId(req.user._id);

  const formattedUrls = urls.map((url) => ({
    ...url._doc,
    short_url: process.env.APP_URL + url.short_url,
  }));

  res.status(200).json({urls: formattedUrls, message: "successfully  urls"});
});

import { getShortUrl } from "../dao/shortUrl.js";
import { createShortUrlWithoutUser,createShortUrlWithUser  } from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url);
  res.send(process.env.APP_URL + shortUrl);
};

export const redirectFromShortUrl = async (req, res) => {
    const { id } = req.params;
    const url = await getShortUrl(id);
    res.redirect(url.full_url);
}
     
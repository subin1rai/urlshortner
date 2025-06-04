import { createShortUrlservice } from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlservice(url);
  res.send(process.env.APP_URL + shortUrl);
};

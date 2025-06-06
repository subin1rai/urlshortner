import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/shortUrl.js";

export const createShortUrlWithoutUser  = async  (url) => {
    const shortUrl = await generateNanoId(7);
    if(!shortUrl) throw new Error("Failed to generate short URL");

    await saveShortUrl(shortUrl, url);

      return shortUrl;
}
export const createShortUrlWithUser  = async  (url,userId, slug= null) => {
    const shortUrl = await generateNanoId(7);
    
    await saveShortUrl(shortUrl, url,userId);
      return shortUrl;
}
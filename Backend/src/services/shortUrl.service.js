import { generateNanoId } from "../utils/helper.js";
import urlschema from "../models/shorturl.model.js";

export const createShortUrlservice = async  (url) => {
    const shortUrl = await generateNanoId(7);

      return shortUrl;
}
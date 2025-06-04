import urlschema from "../models/shorturl.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newurl = new urlschema({
      full_url: longUrl,
      short_url: shortUrl,
    });
    if (userId) {
      newurl.user = userId;
    }
    await  newurl.save();
  } catch (error) {
    if(error.code === 11000) {
      // Duplicate key error
      throw new ConflictError("Short URL already exists");
    }
    throw new Error(error);
  }
};

export const getShortUrl = async (shortUrl) => {
  console.log(shortUrl);
  return await urlschema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } }
  );
};

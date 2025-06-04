import urlschema from "../models/shorturl.model.js";

export const saveShortUrl = async (shortUrl,longUrl, userId) => {
    const newurl = new urlschema({
        full_url: longUrl,
        short_url: shortUrl
        });
        if(userId) {
            newurl.user = userId;
        }
      newurl.save();

    }

    export const getShortUrl = async (shortUrl) => {
        console.log(shortUrl);
    return await urlschema.findOneAndUpdate({ short_url: shortUrl }, {$inc: { clicks: 1 }});
    
    }
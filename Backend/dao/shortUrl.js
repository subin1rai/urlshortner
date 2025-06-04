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
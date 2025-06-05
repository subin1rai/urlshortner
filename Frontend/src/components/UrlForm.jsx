import React from "react";
import { useState } from "react";
import { createShortUrl } from "../api/shortUrl.app";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  
  const handlesubmit = async () => {
    const shortUrl = await createShortUrl(url);
      setShortUrl(shortUrl);
  }; 
  
    const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onInput={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handlesubmit}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        Shorten URL
      </button>

      {/* {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )} */}

      {shortUrl && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-700 mb-2">Your shortened URL:</p>
          <div className="flex items-center">
            <a 
              href={shortUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {shortUrl}
            </a>
            <button
              onClick={handleCopy}
              className={`ml-2 p-1 flex items-center ${copied ? 'text-green-500' : 'text-gray-500 hover:text-gray-700'}`}
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <span className="mr-1">✓</span>
                  <span className="text-xs">Copied!</span>
                </>
              ) : (
                "📋"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;

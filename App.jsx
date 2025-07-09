import React, { useState } from "react";
import axios from "axios"; 
const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("https:////20.244.56.144/evaluation-service/register", {
        url: url,
        title:'title',
        body:{
          "email":"ramakrishna@abc.edu",
          "name":"Rama Krishna",
          "mobileNo":"9999999999",
          "githubUsername":"github",
          "rollNo":"aa1bb",
          "accessCode":"xgAsNC"
    }
      });
      setShortenedUrl(response.data.shortenedUrl);
    } catch (err) {
      setError("An error occurred while shortening the URL.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="url-shortener">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={handleInputChange} placeholder="Enter URL"required/>
        <button type="submit" disabled={loading}>{loading ? "Shortening..." : "Shorten URL"}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};
export default UrlShortener;

import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
     <Head>
  <title>Movie Buzz - Latest Hollywood Movie News</title>
  <meta name="description" content="Catch all the latest Hollywood movie news, reviews, and updates!" />
  <meta name="keywords" content="Hollywood news, movie updates, celebrity news, film reviews, latest trailers" />
  <meta name="author" content="Movie Buzz Team" />

  {/* Open Graph for social media */}
  <meta property="og:title" content="Movie Buzz - Latest Hollywood Movie News" />
  <meta property="og:description" content="Catch all the latest Hollywood movie news, reviews, and updates!" />
  <meta property="og:image" content="/og-image.jpg" /> {/* Optional: Add your image in public folder */}
  <meta property="og:url" content="https://movie-news-blog-guxv.vercel.app/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Movie Buzz - Latest Hollywood Movie News" />
  <meta name="twitter:description" content="Catch all the latest Hollywood movie news, reviews, and updates!" />
  <meta name="twitter:image" content="/og-image.jpg" /> {/* Optional */}

  <link rel="canonical" href="https://movie-news-blog-guxv.vercel.app/" />
</Head>

      <h1 className="text-4xl font-bold mb-6 text-center"> Movie Buzz </h1>
      {articles.length === 0 ? (
        <p className="text-center text-gray-500"> Loading news... </p>
      ) : (
        articles.map((article, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            {" "}
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-64 object-cover rounded mb-3"
              />
            )}{" "}
            <h2 className="text-2xl font-semibold mb-1"> {article.title} </h2>{" "}
            <p className="text-gray-700 mb-2"> {article.description} </p>{" "}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read Full Article→{" "}
            </a>{" "}
          </div>
        ))
      )}{" "}
    </div>
  );
}

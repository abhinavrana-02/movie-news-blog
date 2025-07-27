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
        <title> Movie Buzz - Hollywood News </title>{" "}
        <meta
          name="description"
          content="Latest Hollywood and movie news from trusted sources."
        />
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

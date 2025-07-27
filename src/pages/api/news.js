// pages/api/news.js

export default async function handler(req, res) {
  const apiKey = "7782b101707848bca6842486ed28d0e9"; // ✅ Make sure this is your valid key
  const query = "hollywood movies";
  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.articles) {
      return res.status(500).json({ error: "No articles found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}

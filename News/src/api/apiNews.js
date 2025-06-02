import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (
  page_number = 1,
  page_size = 10,
  category = "World",
  keywords = ""
) => {
  try {
    if (!API_KEY) throw new Error("API_KEY is missing");

    const response = await axios.get("/api/news", {
      headers: { Accept: "application/json" },
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });

    if (!response.data || !Array.isArray(response.data.news)) {
      console.error("Unexpected API response format:", response.data);
      return { news: [] };
    }

    return response.data;
  } catch (error) {
    console.error("API fetch error:", error.message || error);
    return { news: [] };
  }
};

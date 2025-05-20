import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    if (!BASE_URL || !API_KEY) {
      throw new Error("API config is missing. Check .env file.");
    }

    const response = await axios.get(`${BASE_URL}latest-news`, {
      headers: {
        Accept: "application/json",
      },
      params: {
        apiKey: API_KEY,
      },
    });

    if (!response.data || !Array.isArray(response.data.news)) {
      throw new Error("Unexpected API response format");
    }

    return response.data;
  } catch (error) {
    console.error("API fetch error:", error.message);
    return { news: [] };
  }
};

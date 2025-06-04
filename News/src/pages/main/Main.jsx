import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import LatestNews from "../../components/LatestNews/LatestNews";
import { useDebounce } from "../../helpers/hooks/useDebounts.js";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keywords, setKeywords] = useState("");
  const debouncedKeywords = useDebounce(keywords, 1500);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await getNews(1, 10, "World", debouncedKeywords);
        const articles = Array.isArray(response?.news) ? response.news : [];
        setNews(articles);
      } catch (error) {
        console.error("Ошибка при загрузке новостей:", error);
        setNews([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [debouncedKeywords]);

  return (
    <main className={styles.main}>
      <LatestNews banners={news.slice(0, 3)} isLoading={isLoading} />
      <NewsByFilters />
    </main>
  );
};

export default Main;

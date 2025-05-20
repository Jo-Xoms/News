import styles from "./styles.module.css";
import Banner from "../../components/Banner/NewsBanner";
import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        console.log("API response:", response);

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
  }, []);

  return (
    <main className={styles.main}>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : news.length > 0 ? (
        <Banner item={news[0]} />
      ) : (
        <p>Нет доступных новостей.</p>
      )}
      <NewsList news={news} />
    </main>
  );
};

export default Main;

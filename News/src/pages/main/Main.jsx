import styles from "./styles.module.css";
import Banner from "../../components/Banner/NewsBanner";
import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 5;
  const pageSize = 10;

  const fetchNews = async (page) => {
    setIsLoading(true);
    try {
      const response = await getNews(page, pageSize);
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

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  return (
    <main className={styles.main}>
      {isLoading ? (
        <Skeleton count={1} type="banner" />
      ) : news.length > 0 ? (
        <Banner item={news[0]} />
      ) : (
        <p>Нет доступных новостей.</p>
      )}
      <Pagination totalPage={totalPage} onPageChange={setCurrentPage} />{" "}
      {isLoading ? (
        <Skeleton count={5} type="card" />
      ) : news.length > 0 ? (
        <NewsList news={news} />
      ) : null}
    </main>
  );
};

export default Main;

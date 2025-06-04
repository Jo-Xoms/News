import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Banner from "../../components/Banner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import LatestNews from "../../components/LatestNews/LatestNews";
import { getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounts.js";

const NewsByFilters = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const [keywords, setKeywords] = useState("");

  const debouncedKeywords = useDebounce(keywords, 500);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await getNews(
          currentPage,
          10,
          activeCategory,
          debouncedKeywords
        );

        const articles = Array.isArray(response.news) ? response.news : [];
        setNews(articles);
        setTotalPage(response.totalPages || 0);
      } catch (error) {
        console.error("Ошибка загрузки новостей:", error);
        setNews([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [currentPage, activeCategory, debouncedKeywords]);

  return (
    <section className={styles.section}>
      <Filter activeTab={activeCategory} setActiveTab={setActiveCategory} />
      <Search keywords={keywords} setKeywords={setKeywords} />

      {isLoading ? (
        <Skeleton count={1} type="banner" />
      ) : news.length > 0 ? (
        <>
          <Banner item={news[0]} />
          <LatestNews banners={news.slice(1, 4)} isLoading={isLoading} />
        </>
      ) : (
        <p>Нет доступных новостей.</p>
      )}

      <Pagination totalPage={totalPage} onPageChange={setCurrentPage} />

      {isLoading ? (
        <Skeleton count={5} type="card" />
      ) : news.length > 0 ? (
        <NewsList news={news} />
      ) : null}
    </section>
  );
};

export default NewsByFilters;

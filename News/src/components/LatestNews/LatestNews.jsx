import Skeleton from "../Skeleton/Skeleton";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Последние новости</h2>
      {isLoading ? (
        <div className={styles.grid}>
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} type="banner" />
          ))}
        </div>
      ) : (
        <BannersList banners={banners} />
      )}
    </section>
  );
};

export default LatestNews;

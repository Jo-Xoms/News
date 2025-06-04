import Skeleton from "../Skeleton/Skeleton";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      {isLoading ? (
        <Skeleton type="banner" count={10} />
      ) : (
        <BannersList banners={banners} />
      )}
    </section>
  );
};

export default LatestNews;

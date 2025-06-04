import styles from "./styles.module.css";
import NewsBanner from "../NewsBanner/NewsBanner";

const BannersList = ({ banners }) => (
  <ul className={styles.banners}>
    {banners?.map((banner) => (
      <NewsBanner key={banner.id} item={banner} />
    ))}
  </ul>
);

export default BannersList;

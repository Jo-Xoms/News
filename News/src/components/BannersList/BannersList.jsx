import styles from "./styles.module.css";
import NewsBanner from "../NewsBanner/NewsBanner";

const BannersList = ({ banners }) => (
  <ul className={styles.grid}>
    {banners?.map((banner) => (
      <li key={banner.id} className={styles.item}>
        <NewsBanner item={banner} />
      </li>
    ))}
  </ul>
);

export default BannersList;

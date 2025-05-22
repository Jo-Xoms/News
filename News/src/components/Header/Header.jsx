import { formatDate } from "../../helpers/formatDate.js";
import styles from "./styles.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>YOU NEWS</h1>
      <p className={styles.date}>
        {" "}
        <FaRegCalendarAlt className={styles.icon} />
        {formatDate(new Date())}
      </p>
    </header>
  );
};

export default Header;

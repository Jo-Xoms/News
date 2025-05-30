import styles from "./styles.module.css";
import { IoChevronBack } from "react-icons/io5";

const MobileMenu = ({ onClose }) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <nav className={styles.mobileMenu}>
        <button className={styles.backButton} onClick={onClose}>
          <IoChevronBack size={20} />
          Назад
        </button>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/news">Новости</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
          <li>
            <a href="/contact">Контакты</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;

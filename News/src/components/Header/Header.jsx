import { useState } from "react";
import { formatDate } from "../../helpers/formatDate.js";
import styles from "./styles.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import WeatherWidget from "../WeatherWidget/WeatherWidget";
import MobileMenu from "../Menu/MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topRow}>
          <h1 className={styles.title}>Pulse Today</h1>
          <div className={styles.fone}>
            <div className={styles.weather}>
              <WeatherWidget />
            </div>

            <button className={styles.customBurgerButton} onClick={toggleMenu}>
              <GiHamburgerMenu size={28} />
            </button>
          </div>
        </div>

        <p className={styles.date}>
          <FaRegCalendarAlt className={styles.icon} />
          {formatDate(new Date())}
        </p>
      </header>

      {menuOpen && <MobileMenu onClose={toggleMenu} />}
    </>
  );
};

export default Header;

import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Pagination = ({ totalPage = 1, onPageChange = () => {} }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  const handleClick = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      handleClick(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handlePrev}
        className={styles.arrow}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      <div className={styles.pages}>
        {Array.from({ length: totalPage }).map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={index}
              onClick={() => handleClick(page)}
              className={`${styles.pageButton} ${
                currentPage === page ? styles.active : ""
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className={styles.arrow}
        disabled={currentPage === totalPage}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

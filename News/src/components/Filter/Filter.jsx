import styles from "./styles.module.css";

const Filter = ({ activeTab, setActiveTab }) => {
  const tabs = [
    "World",
    "U.S.",
    "Politics",
    "Tech",
    "Science",
    "Health",
    "Travel",
    "Finance",
    "Culture",
  ];

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.filterContainer}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;

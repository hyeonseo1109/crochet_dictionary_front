import * as styles from "./style.css";

export const SearchInput = () => {
  return (
    <form className={styles.searchBarStyle}>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        className={styles.searchInputStyle}
      />
      <button className={styles.searchButtonStyle}>&rarr;</button>
    </form>
  );
};

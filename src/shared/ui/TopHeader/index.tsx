import { SearchInput } from "@entities/ui";
import * as styles from "./style.css";

export const TopHeader = () => {
  return (
    <div className={styles.headerStyle}>
      <div className={styles.headerTitleBoxStyle}>
        <h2 className={styles.headerTitleStyle}>Crochet Dictionary</h2>
        <p className={styles.headerDescriptionStyle}>
          뜨개러를 위한 코바늘 기법 사전! 이제 더이상 외국 도안을 지나치지
          말아요
        </p>
      </div>
      <SearchInput />
    </div>
  );
};

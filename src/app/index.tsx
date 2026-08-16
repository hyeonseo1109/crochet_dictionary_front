import { MainPage } from "@pages/ui/index.js";
import "./global.css.js";
import { TopHeader } from "@shared/ui/index.js";
import * as styles from "./style.css";

export const App = () => {
  return (
    <div className={styles.appStyle}>
      <TopHeader />
      <MainPage />
    </div>
  );
};

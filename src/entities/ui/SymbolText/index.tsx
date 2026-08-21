import * as styles from "./style.css";

export const SymbolText = ({ text }: { text: string }) => {
  return <div className={styles.symbolIconStyle}>{text}</div>;
};

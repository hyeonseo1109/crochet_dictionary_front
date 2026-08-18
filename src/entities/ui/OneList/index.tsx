import * as styles from "./style.css";

type levelType = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export const OneList = ({
  name,
  level,
}: {
  name: string;
  level: levelType;
}) => {
  return (
    <div className={styles.oneListContainerStyle}>
      <p>{name}</p>
      <p>{level}</p>
    </div>
  );
};

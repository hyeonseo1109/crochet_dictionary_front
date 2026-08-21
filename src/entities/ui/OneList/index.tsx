// import { SymbolText } from "../SymbolText";
import { SymbolText } from "../SymbolText";
import * as styles from "./style.css";

type levelType = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
type symbolsType = {
  en: string;
  ja: string;
  ko: string;
  ru: string;
  zh: string;
};
const languages: (keyof symbolsType)[] = ["en", "ja", "zh", "ru"];

export const OneList = ({
  name,
  level,
  symbols,
}: {
  name: string;
  level: levelType;
  symbols: symbolsType;
}) => {
  console.log("symbols", symbols);
  return (
    <div className={styles.oneListContainerStyle}>
      <p>{name}</p>
      <div>
        {languages.map((language) => (
          <SymbolText key={language} text={symbols[language]} />
        ))}
      </div>
      <p>{level}</p>
    </div>
  );
};

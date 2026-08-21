import { OneList } from "@entities/ui";
import { useStitches } from "@features/model";
import * as styles from "./style.css";
import { useEffect } from "react";

export const MainList = () => {
  const { data, isLoading, isError } = useStitches();

  useEffect(() => {
    console.log("data", data?.data);
  }, [data]);

  return (
    <div className={styles.listContainerStyle}>
      {isLoading && <div>로딩 중</div>}
      {isError && <div>에러 발생</div>}
      {/* <div> */}
      {data?.data.map((item) => (
        <OneList key={item.id} name={item.name} level={item.difficulty} />
      ))}
      {/* </div> */}
    </div>
  );
};

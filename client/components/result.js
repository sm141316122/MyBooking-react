import style from "../styles/result.module.scss";
import ResultItem from "../subcomponents/result-item";
import hotels from "../popular-hotel";

export default function Result() {
  return (
    <div className={style.resultContainer}>
      <h2 className={style.title}>
        台北：找到 <span>100</span> 間住宿
      </h2>
      <div className={style.result}>
        {hotels &&
          hotels.map((item, index) => {
            return <ResultItem index={index} />;
          })}
      </div>
    </div>
  );
}

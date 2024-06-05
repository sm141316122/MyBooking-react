import style from "../styles/result-item.module.scss";
import Link from "next/link";

export default function ResultItem({ index }) {
  return (
    <div
      className={
        index == 0 ? `${style.item} ${style.firstItem}` : `${style.item}`
      }
    >
      <div className={style.img}></div>
      <div className={style.info}>
        <div className={style.left}>
          <h3>
            <Link className={style.title} href={"#"}>
              一中宿喜
            </Link>
          </h3>
          <div className={style.place}>
            <span>地區</span>
            <span>距離</span>
          </div>
          <div className={style.infoDes}>
            <div className={style.device}>
              <div className={style.spot}>雙人床</div>
              <div>1張雙人床</div>
            </div>
            <div className={style.pay}>
              <div className={style.spot}>可免費取消</div>
              <div>
                <span className={style.spot}>無須訂金</span>
                <span> - </span>
                <span>入住時付款</span>
              </div>
              <div className={`${style.spot} ${style.remainRoom}`}>
                此價格的客房在本站僅剩 1 間
              </div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.rate}>
            <div className={style.rateInfo}>
              <div className={style.RarteDes}>好</div>
              <div className={style.comment}>評語</div>
            </div>
            <div className={style.rateIcon}>9.8</div>
          </div>
          <div className={style.priceInfo}>
            <div>1晚、1位成人</div>
            <div className={style.price}>TWD 3378</div>
            <div>含稅費與其他費用</div>
          </div>
          <button type="button">查看客房供應情況 &gt;</button>
        </div>
      </div>
    </div>
  );
}

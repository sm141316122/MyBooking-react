import style from "../styles/popular-hotels.module.scss";

export default function PopularHotels({ data }) {
  return (
    <div className={style.popularHotels}>
      <div className={style.title}>
        <h2>人氣名宿，公寓類型住宿</h2>
      </div>
      <div className={style.hotelsContainer}>
        {data &&
          data.map((item, index) => {
            return (
              <div className={style.item}>
                <div className={style.img}>
                  <img src="../image/taipei.jpg" alt="" />
                </div>
                <div className={style.hotelInfo}>
                  <div className={style.infoTitle}>{item.title}</div>
                  <div className={style.subtitle}>{item.place}</div>
                  <div className={style.rate}>
                    <div className={style.rateIcon}>{item.rate}</div>
                    <span className={style.rateText}>
                      {item.rate >= 9.5 ? "好極了" : "傑出"}
                    </span>
                    <span>．</span>
                    <span>{item.comment.toLocaleString()} 則評語</span>
                  </div>
                  <div className={style.price}>
                    <span>起價</span>
                    TWD {item.price.toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

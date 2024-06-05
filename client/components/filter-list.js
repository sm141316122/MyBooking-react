import { useState } from "react";
import style from "../styles/filter-list.module.scss";

export default function FilterList() {
  const [price, setPrice] = useState(3200);
  const handlePrice = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <div className={style.aside}>
      <div className={style.map}></div>
      <div className={style.filter}>
        <span className={style.title}>透過以下分類搜尋：</span>
        <hr />
        <div className={style.subtitle}>房價預算（每晚）</div>
        <div className={style.price}>
          <label htmlFor="price">價錢</label>
          <div className={style.priceInput}>
            <span>TWD {price.toLocaleString()}</span>
            <input
              onChange={handlePrice}
              type="range"
              min={300}
              max={6000}
              step={100}
              name="price"
            />
          </div>
        </div>
        <hr />
        <div className={style.subtitle}>評分</div>
        <div className={style.check}>
          <input type="checkbox" name="abov9" />
          <label htmlFor="abov9">好極了：9分以上</label>
        </div>
        <div className={style.check}>
          <input type="checkbox" name="abov8" />
          <label htmlFor="abov9">非常好：8分以上</label>
        </div>
        <div className={style.check}>
          <input type="checkbox" name="abov" />
          <label htmlFor="abov9">好：7分以上</label>
        </div>
        <div className={style.check}>
          <input type="checkbox" name="abov6" />
          <label htmlFor="abov9">令人愉悅：6分以上</label>
        </div>
      </div>
    </div>
  );
}

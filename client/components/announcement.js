import style from "../styles/announcement.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function Announcement() {
  return (
    <div className={style.announcementContainer}>
      <div className={style.infoDes}>
        <div className={style.iconBox}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
        <p>
          獲得所需建議。在出發之前，查看最新的新冠肺炎（COVID-19）相關限制。了解更多
        </p>
      </div>
      <div className={style.discountContainer}>
        <div className={style.title}>
          <h2>特別優惠</h2>
          <p>為您提供的促銷、折扣與特別優惠</p>
        </div>
        <div className={style.infoContainer}>
          <div className={style.infoLeft}>
            <div className={style.infoText}>
              <h3>正在規劃出遊嗎？查看2024熱門景點</h3>
              <p>不妨去看看吧</p>
              <button type="button">去逛逛</button>
            </div>
            <div className={style.infoImg}>
              <img src="../image/vacation.jpg" alt="旅遊圖片" />
            </div>
          </div>
          <div className={style.backgroundImg}>
            <div className={style.infoRight}>
              <div className={style.infoText}>
                <h3>把握當下</h3>
                <p>活動結束前預訂並完成住房，可省至少15%</p>
                <button type="button">尋找大優惠</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

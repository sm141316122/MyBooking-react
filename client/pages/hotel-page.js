import style from "../styles/hotel-page.module.scss";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShareNodes,
  faLocationDot,
  faTag,
  faBanSmoking,
  faWifi,
  faXmark,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import pictures from "../hotel-picture-data";
import { useState } from "react";

export default function HotelPage() {
  const [isOpenPicture, setOpenPicture] = useState(false);
  const [page, setPage] = useState(null);
  const openPicture = (e) => {
    setOpenPicture(true);
    setPage(Number(e.target.id));
    console.log(typeof Number(e.target.id));
    document.body.style.overflowY = "hidden";
  };
  const nextPicture = () => {
    page == pictures.length - 1 ? setPage(0) : setPage(page + 1);
  };
  const prePicture = () => {
    page < 1 ? setPage(pictures.length - 1) : setPage(page - 1);
  };

  return (
    <Layout>
      <div className={style.hotelContainer}>
        <div className={style.hotelWrapper}>
          <div className={style.nav}>
            <div className={`${style.navItem} ${style.firstItem}`}>總覽</div>
            <div className={style.navItem}>資訊 & 房價</div>
            <div className={style.navItem}>設施</div>
            <div className={style.navItem}>住宿規定</div>
            <div className={style.navItem}>住客評語 (7,040)</div>
          </div>
          <div className={style.title}>
            <div className={style.left}>
              <div className={style.name}>一中宿喜</div>
              <div className={style.place}>
                <span className={style.address}>
                  <FontAwesomeIcon
                    className={style.addressIcon}
                    icon={faLocationDot}
                  />
                  地址
                </span>
                <span> - </span>
                <span className={style.showMap}>地理位置很好．顯示地圖</span>
              </div>
            </div>
            <div className={style.right}>
              <div className={style.buttons}>
                <div className={style.icon}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className={style.icon}>
                  <FontAwesomeIcon icon={faShareNodes} />
                </div>
                <div className={style.booking}>現在就預定</div>
              </div>
              <div className={style.refund}>
                <FontAwesomeIcon icon={faTag} />
                <span className={style.refundText}>買貴退差價</span>
              </div>
            </div>
          </div>
          <div className={style.pictureAndRateAndMap}>
            <div className={style.hotelImg}>
              <div className={style.up}>
                {pictures.slice(0, 3).map((picture, index) => {
                  return (
                    <div className={style.imgWrapper} key={index}>
                      <img
                        id={index}
                        onClick={openPicture}
                        src={picture.src}
                        alt="img"
                      />
                    </div>
                  );
                })}
              </div>
              <div className={style.down}>
                {pictures.length >= 3 &&
                  pictures.slice(3, 9).map((picture, index) => {
                    return index == 5 ? (
                      <div className={style.imgWrapper} key={index + 3}>
                        <div
                          className={style.more}
                          id={index + 3}
                          onClick={openPicture}
                        >
                          +{pictures.length - 9} 張相片
                        </div>
                        <img src={picture.src} alt="img" />
                      </div>
                    ) : (
                      <div className={style.imgWrapper} key={index}>
                        <img
                          src={picture.src}
                          alt="img"
                          id={index + 3}
                          onClick={openPicture}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={style.rateWrapper}>
              <div className={style.rate}>
                <div className={style.rateDes}>
                  <p>很棒</p>
                  <span>7,040 則評語</span>
                </div>
                <div className={style.rateIcon}>8.7</div>
              </div>
              <div className={style.comment}></div>
              <div className={style.employeeRate}>
                <p>員工素質</p>
                <div className={`${style.rateIcon} ${style.colorChange}`}>
                  9.1
                </div>
              </div>
            </div>
            <div className={style.mapWrapper}>
              <button type="button">於地圖上顯示</button>
            </div>
          </div>
          <div className={style.hotelDes}>
            <div className={style.desWrapper}>
              <p>
                預訂一中宿喜可享 Genius 折扣！只要<span>登入</span>
                ，預訂此住宿即可省一筆。
                <br />
                Adagio Hostel 位置超讚，位於台中的中區，距離國立臺灣美術館 2.5
                公里，距離廣三 SOGO 百貨 2.6 公里，距離逢甲夜市 6.5
                公里。這間住宿距離大慶車站約 10 公里，距離台中孔廟約 1.8
                公里，距離中正公園約 1.9 公里。這間住宿距離台中火車站 1.1
                公里，距離市中心 200 公尺。
              </p>
              <p>
                所有客房均提供空調、衛星頻道平面電視、冰箱、電熱水壺、淋浴設施、免費盥洗用品和書桌。
                Adagio Hostel 的客房設有私人衛浴，且提供吹風機，並可使用
                WiFi（免費）。部分客房有陽台。這間住宿的每間客房都有寢具和毛巾。
              </p>
              <p>
                Adagio Hostel
                附近的人氣景點包括台中公園、台中市政府大樓和南天宮。最近的機場是臺中國際機場，距離
                Adagio Hostel 13 公里。
              </p>
              <p>
                獨行旅客特別喜歡這個位置－並給他們的單獨住宿體驗
                <span> 8.9 </span>分
              </p>
              <div className={style.popularDevice}>熱門設施</div>
              <div className={style.popularDeviceWrapper}>
                <div>
                  <FontAwesomeIcon className={style.icon} icon={faBanSmoking} />
                </div>
                <div>禁菸客房</div>
                <div>
                  <FontAwesomeIcon className={style.icon} icon={faWifi} />
                </div>
                <div>免費無線網路</div>
              </div>
            </div>
            <div className={style.hotelFeature}>
              <div className={style.hotelFeatureWrapper}>
                <div>住宿特色</div>
                <p>入住 1 晚的最佳選擇！</p>
                <p>位置便利：位於顧客評分高達 8.9 的便利地帶</p>
                <p>深受獨行旅客歡迎</p>
                <button type="button">現在就預訂</button>
              </div>
            </div>
          </div>
        </div>
        {isOpenPicture && (
          <div className={style.openImgContainer}>
            <div className={style.openImgWrapper}>
              <div className={style.title}>
                <div className={style.name}>一中宿喜</div>
                <button className={style.booking} type="button">
                  立即訂房
                </button>
                <button
                  className={style.close}
                  onClick={() => {
                    setOpenPicture(false);
                    document.body.style.overflowY = "scroll";
                  }}
                  type="button"
                >
                  <span>關閉</span>
                  <FontAwesomeIcon className={style.icon} icon={faXmark} />
                </button>
              </div>
              <div className={style.imgContainer}>
                <div
                  className={`${style.preBtn} ${style.btn}`}
                  onClick={prePicture}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div className={style.imgWrapper}>
                  <div className={style.img}>
                    <img src={pictures[page].src} alt="img" />
                  </div>
                  <div className={style.page}>
                    {page + 1} / {pictures.length}
                  </div>
                </div>
                <div
                  className={`${style.nextBtn} ${style.btn}`}
                  onClick={nextPicture}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

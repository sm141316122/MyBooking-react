import Layout from "../components/layout";
import Announcement from "../components/announcement";
import style from "../styles/home.module.scss";
import category from "../data";
import PopularHotels from "../components/popularHotels";
import popularHotelsData from "../popular-hotel";
import Header from "../components/header";

export default function Home() {
  return (
    <Layout>
      <div className={style.homePage}>
        <Announcement />
        <section className={style.feature}>
          <div className={style.popular}>
            <div className={style.text}>
              <h2>新潮的目的地</h2>
              <p>來自台灣的旅客的最熱門選擇</p>
            </div>
            <div className={style.localtionArea}>
              <div className={`${style.container} ${style.taipei}`}>
                <div className={style.item}>
                  <h3>台北</h3>
                </div>
              </div>
              <div className={`${style.container} ${style.taichung}`}>
                <div className={style.item}>
                  <h3>台中</h3>
                </div>
              </div>
            </div>
            <div className={`${style.threeItem} ${style.localtionArea}`}>
              <div className={`${style.container} ${style.tainan}`}>
                <div className={style.item}>
                  <h3>台南</h3>
                </div>
              </div>
              <div className={`${style.container} ${style.hualien}`}>
                <div className={style.item}>
                  <h3>花蓮</h3>
                </div>
              </div>
              <div className={`${style.container} ${style.kaohsiung}`}>
                <div className={style.item}>
                  <h3>高雄</h3>
                </div>
              </div>
            </div>
          </div>

          {/* 以住宿類型瀏覽 */}
          <div className={style.category}>
            <div className={style.title}>
              <h2>依住宿類型瀏覽</h2>
            </div>
            <div className={style.categoryItem}>
              {category &&
                category[0].map((item, index) => {
                  return index == category[0].length - 1 ? (
                    <div className={`${style.item} ${style.lastItem}`}>
                      <div className={style.img}>
                        <img src="../image/category/hotel.jpg" alt="" />
                      </div>
                      <span className={style.text}>{item.type}</span>
                    </div>
                  ) : (
                    <div className={style.item}>
                      <div className={style.img}>
                        <img src="../image/category/hotel.jpg" alt="" />
                      </div>
                      <span className={style.text}>{item.type}</span>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 以熱門城市瀏覽 */}
          <div className={style.category}>
            <div className={style.title}>
              <h2 className={style.cityTitle}>探索臺灣</h2>
              <p>這些目的地魅力無窮，等你來體驗！</p>
            </div>
            <div className={style.categoryItem}>
              {category &&
                category[1].map((item, index) => {
                  return index == category[1].length - 1 ? (
                    <div
                      className={`${style.item} ${style.lastItem} ${style.cityItem}`}
                    >
                      <div className={style.img}>
                        <img src="../image/taichung.jpg" alt="" />
                      </div>
                      <span className={style.text}>{item.type}</span>
                    </div>
                  ) : (
                    <div className={`${style.item} ${style.cityItem}`}>
                      <div className={style.img}>
                        <img src="../image/taichung.jpg" alt="" />
                      </div>
                      <span className={style.text}>{item.type}</span>
                      <p className={style.roomNumber}>
                        {item.amount.toLocaleString()} 間住宿
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 熱門飯店 */}
          <PopularHotels data={popularHotelsData} />
        </section>
        <section className={style.banner}>
          <div className={style.img}>
            <img src="../image/genius.png" alt="" />
          </div>
          <div className={style.info}>
            <h3>優惠立即享</h3>
            <p>登入您的 Booking.com 帳戶，尋找藍色的 Genius 圖標，輕鬆省一筆</p>
            <div className={style.buttons}>
              <button type="button">登入</button>
              <button className={style.register} type="button">
                註冊
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

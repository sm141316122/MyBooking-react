import Head from "next/head";
import Link from "next/link";
import styles from "../styles/layout.module.scss";
import HeaderSearchBar from "./header-search-bar";
import Header from "./header";
import Footer from "./footet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faPlaneDeparture,
  faCarSide,
  faToriiGate,
  faTaxi,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=divice-width,initial-scale=1" />
        <title>MyBooking</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <div className={styles.lineOne}>
              <div className={styles.left}>
                <h1>
                  <Link className={styles.logo} href="/">
                    MyBooking
                  </Link>
                </h1>
              </div>
              <div className={styles.right}>
                <button className={styles.navButton}>TWD</button>
                <div className={styles.navButton}>
                  <div className={styles.tw}></div>
                </div>
                <button className={styles.navButton}>
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </button>
                <button className={styles.navButton}>上傳租屋資訊</button>
                <button
                  className={styles.user}
                  onClick={() => router.push("/register")}
                >
                  註冊
                </button>
                <button
                  className={styles.user}
                  onClick={() => router.push("/login")}
                >
                  登入
                </button>
              </div>
            </div>
            <div className={styles.lineTwo}>
              <button className={`${styles.active} ${styles.item}`}>
                <FontAwesomeIcon className={styles.navIcon} icon={faBed} />
                住宿
              </button>
              <button className={styles.item}>
                <FontAwesomeIcon
                  className={styles.navIcon}
                  icon={faPlaneDeparture}
                />
                航班
              </button>
              <button className={styles.item}>
                <FontAwesomeIcon className={styles.navIcon} icon={faHotel} />
                機票 + 飯店
              </button>
              <button className={styles.item}>
                <FontAwesomeIcon className={styles.navIcon} icon={faCarSide} />
                租車
              </button>
              <button className={styles.item}>
                <FontAwesomeIcon
                  className={styles.navIcon}
                  icon={faToriiGate}
                />
                景點/活動
              </button>
              <button className={styles.item}>
                <FontAwesomeIcon className={styles.navIcon} icon={faTaxi} />
                機場計程車
              </button>
            </div>
          </nav>
          {children._source.fileName.split("\\").slice(-1)[0] == "index.js" && (
            <Header />
          )}
          <HeaderSearchBar />
        </div>
      </header>
      <main className={styles.mainArea}>{children}</main>
      <Footer />
    </div>
  );
}

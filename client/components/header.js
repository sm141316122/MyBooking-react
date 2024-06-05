import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerDes}>
      <h2>尋找下趟住宿</h2>
      <p>搜尋飯店、民宿及其他住宿類型的優惠...</p>
      <p>以Booking為範例，網站僅為個人練習</p>
    </div>
  );
}

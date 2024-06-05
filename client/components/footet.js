import style from "../styles/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.subscribe}>
        <h3>隨時掌握最新消息</h3>
        <p>訂閱即可接收 MyBooking.com 的行銷電子報，包含促銷、獎勵、旅遊體驗</p>
        <div className={style.email}>
          <input type="text" placeholder="您的電子郵件" />
          <button type="button">訂閱</button>
        </div>
        <span>您隨時都可以取消訂閱</span>
      </div>
      <div className={style.postRoom}>
        <div className={style.container}>將您的住宿註冊上線</div>
      </div>
    </div>
  );
}

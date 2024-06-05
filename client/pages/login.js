import UserLayout from "../components/user-layout";
import style from "../styles/login.module.scss";

export default function Login() {
  return (
    <UserLayout>
      <div className={style.login}>
        <span className={style.title}>登入帳戶</span>
        <label className={style.emailTitle} htmlFor="email">
          電子信箱
        </label>
        <input
          type="email"
          name="email"
          id={style.email}
          placeholder="請填寫您的電子信箱"
        />
        <input
          type="password"
          name="password"
          id={style.password}
          placeholder="請填寫您的密碼"
        />
        <button className={style.loginBtn} type="button">
          登入
        </button>
        <div className={style.otherChoice}>
          <hr />
          <p>或使用以下選項</p>
          <hr />
        </div>
        <div></div>
      </div>
    </UserLayout>
  );
}

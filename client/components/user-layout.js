import SignInHeader from "../subcomponents/user-layout-header";
import style from "../styles/user-layout.module.scss";

export default function UserLayout({ children }) {
  return (
    <div className={style.layoutContainer}>
      <SignInHeader />
      <div className={style.layoutWrapper}>
        <div className={style.layoutArea}>{children}</div>
      </div>
    </div>
  );
}

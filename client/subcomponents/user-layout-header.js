import style from "../styles/user-layout-header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

export default function SignInHeader() {
  return (
    <div className={style.userLayoutHeader}>
      <div className={style.userLayoutHeaderWrapper}>
        <div className={style.left}>
          <h1>
            <Link className={style.logo} href="/">
              MyBooking
            </Link>
          </h1>
        </div>
        <div className={style.right}>
          <div className={style.navButton}>
            <div className={style.tw}></div>
          </div>
          <button className={style.navButton}>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </button>
        </div>
      </div>
    </div>
  );
}

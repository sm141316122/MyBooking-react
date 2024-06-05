import styles from "../styles/header-search-bar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { zhTW } from "date-fns/locale/zh-TW";
import format from "date-fns/format";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Link from "next/link";

export default function HeaderSearchBar() {
  const [isOpenCondition, setOpenCondition] = useState(false);
  const [isOpenCalendar, setOpenCalendar] = useState(false);
  const [input, setInput] = useState("");

  // 設定Condition初始值
  const [condition, setCondition] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // 設定DateRange初始值
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  // 選取Date後更改
  const handleSelect = (ranges) => {
    let { startDate, endDate } = ranges.selection;
    setDateRange({
      startDate,
      endDate,
      key: "selection",
    });
  };

  const handleConditionBtn = (name, sign) => {
    setCondition((prev) => {
      return {
        ...prev,
        [name]: sign == "decrease" ? condition[name] - 1 : condition[name] + 1,
      };
    });
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleOpenCalendar = () => {
    if (isOpenCondition) {
      setOpenCondition(!isOpenCondition);
    }
    setOpenCalendar(!isOpenCalendar);
  };

  const handleOpenCondition = () => {
    if (isOpenCalendar) {
      setOpenCalendar(!isOpenCalendar);
    }
    setOpenCondition(!isOpenCondition);
  };

  return (
    <div className={styles.searchBar}>
      <div className={`${styles.searchBox} ${styles.noPointer}`}>
        <FontAwesomeIcon className={styles.searchIcon} icon={faBed} />
        <input
          type="Search"
          placeholder="你要去哪裡"
          name="search"
          className={styles.searchInput}
          onChange={handleInput}
          required
        />
      </div>
      <div className={styles.searchBox}>
        <FontAwesomeIcon
          className={styles.searchIcon}
          icon={faCalendarDays}
          onClick={handleOpenCalendar}
        />
        <span onClick={handleOpenCalendar}>
          {format(dateRange.startDate, "M 月 dd 日")}
          {format(dateRange.startDate, "E") == "Mon" && " (一) "}
          {format(dateRange.startDate, "E") == "Tue" && " (二) "}
          {format(dateRange.startDate, "E") == "Wed" && " (三) "}
          {format(dateRange.startDate, "E") == "Thu" && " (四) "}
          {format(dateRange.startDate, "E") == "Fri" && " (五) "}
          {format(dateRange.startDate, "E") == "Sat" && " (六) "}
          {format(dateRange.startDate, "E") == "Sun" && " (日) "}-
          {format(dateRange.endDate, " M 月 dd 日")}
          {format(dateRange.endDate, "E") == "Mon" && " (一) "}
          {format(dateRange.endDate, "E") == "Tue" && " (二) "}
          {format(dateRange.endDate, "E") == "Wed" && " (三) "}
          {format(dateRange.endDate, "E") == "Thu" && " (四) "}
          {format(dateRange.endDate, "E") == "Fri" && " (五) "}
          {format(dateRange.endDate, "E") == "Sat" && " (六) "}
          {format(dateRange.endDate, "E") == "Sun" && " (日) "}
        </span>

        {isOpenCalendar && (
          <div className={styles.dateRange}>
            <DateRange
              ranges={[dateRange]}
              locale={zhTW}
              onChange={handleSelect}
            />
            <button
              className={styles.dateBtn}
              onClick={() => setOpenCalendar(!isOpenCalendar)}
              type="button"
            >
              完成
            </button>
          </div>
        )}
      </div>
      <div className={styles.searchBox} onClick={handleOpenCondition}>
        <FontAwesomeIcon className={styles.searchIcon} icon={faUserGroup} />
        <span style={{ width: "220px" }}>
          {`${condition.adult}位成人．${condition.children}位孩童．${condition.room}間房間`}
        </span>
      </div>

      {isOpenCondition && (
        <div className={styles.conditionContainer}>
          <div className={styles.condition}>
            <p>成人</p>
            <div className={styles.conditionBox}>
              <button
                className={styles.conditionBtn}
                onClick={() => handleConditionBtn("adult", "decrease")}
                disabled={condition.adult <= 1}
              >
                -
              </button>
              <p>{condition.adult}</p>
              <button
                className={styles.conditionBtn}
                onClick={() => handleConditionBtn("adult", "increase")}
                disabled={condition.adult >= 30}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.condition}>
            <p>孩童</p>
            <div className={styles.conditionBox}>
              <button
                className={styles.conditionBtn}
                onClick={() => handleConditionBtn("children", "decrease")}
                disabled={condition.children <= 0}
              >
                -
              </button>
              <p>{condition.children}</p>
              <button
                className={styles.conditionBtn}
                onClick={() => handleConditionBtn("children", "increase")}
                disabled={condition.children >= 10}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.condition}>
            <p>客房</p>
            <div className={styles.conditionBox}>
              <button
                className={styles.conditionBtn}
                onClick={() => handleConditionBtn("room", "decrease")}
                disabled={condition.room <= 1}
              >
                -
              </button>
              <p>{condition.room}</p>
              <button
                className={styles.conditionBtn}
                onClick={() => handleConditionBtn("room", "increase")}
                disabled={condition.room >= 30}
              >
                +
              </button>
            </div>
          </div>
          <hr style={{ margin: "1rem 0" }} />
          <button
            className={styles.complete}
            onClick={() => setOpenCondition(false)}
          >
            完成
          </button>
        </div>
      )}
      <button className={styles.searchBtn}>
        <Link
          href={{
            pathname: "/search-result",
            query: {
              input,
              startdate: format(dateRange.startDate, "M/dd/yyyy"),
              adult: condition.adult,
              children: condition.children,
              room: condition.room,
            },
          }}
        >
          搜尋
        </Link>
      </button>
    </div>
  );
}

import Layout from "../components/layout";
import style from "../styles/search-result.module.scss";
import FilterList from "../components/filter-list";
import Result from "../components/result";
import { useSearchParams } from "next/navigation";

export default function SearchResult() {
  const searchParams = useSearchParams();
  return (
    <Layout>
      <section className={style.resultListContainer}>
        <div className={style.listWrapper}>
          <FilterList />
          <Result />
        </div>
      </section>
    </Layout>
  );
}

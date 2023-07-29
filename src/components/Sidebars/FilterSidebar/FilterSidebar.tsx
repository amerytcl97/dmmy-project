import "./FilterSidebar.module.scss";
import styles from "./FilterSidebar.module.scss";

export const FilterSidebar = () => {
  return (
    <aside>
      <header>
        <h3>Filter</h3>
      </header>
      <section className={styles.content}></section>
    </aside>
  );
};

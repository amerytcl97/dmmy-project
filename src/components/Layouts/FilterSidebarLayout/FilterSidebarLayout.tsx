import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Button, Chip, FilterSidebar } from "@components/index";
import { CaretDown, SquaresFour, XCircle } from "phosphor-react";
import styles from "./FilterSidebarLayout.module.scss";

export const FilterSidebarLayout = () => {
  const removeFilter = () => { };

  const removeAllFilters = () => { };

  useEffect(() => {
    // TODO : Fetch Sidebar content from API;
    console.log("FilterSidebarLayout");
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <FilterSidebar />
      </div>
      <section>
        <header>
          <h3>
            1 - 16 over 7,000 result for <span>"Asus"</span>
          </h3>
          <div className={styles.sorts}>
            <span>Sort by : </span>
            <Button
              title="Best Match"
              endIcon={
                <CaretDown
                  weight="regular"
                  size={20}
                />
              }
              className={styles.sortOption}
            />
            <Button
              endIcon={
                <SquaresFour
                  weight="regular"
                  size={20}
                />
              }
              className={styles.sortList}
            />
          </div>
        </header>
        <div className={styles.selectedFilters}>
          <ul className={styles.filterChipList}>
            <li>
              <Chip
                size="sm"
                title={
                  <div className={styles.filterChip}>
                    Ready to ship
                    <Button
                      startIcon={<XCircle weight="fill" />}
                      onClick={() => removeFilter()}
                    />
                  </div>
                }
              />
            </li>
            <li>
              <Chip
                size="sm"
                title={
                  <div className={styles.filterChip}>
                    Paid Samples
                    <Button
                      startIcon={<XCircle weight="fill" />}
                      onClick={() => removeFilter()}
                    />
                  </div>
                }
              />
            </li>
            <li>
              <Chip
                size="sm"
                title={
                  <div className={styles.filterChip}>
                    Price Minimum
                    <Button
                      startIcon={<XCircle weight="fill" />}
                      onClick={() => removeFilter()}
                    />
                  </div>
                }
              />
            </li>
          </ul>
          <Button
            title="Clear All Filters"
            size="sm"
            onClick={() => removeAllFilters()}
            className={styles.clearFiltersBtn}
          />
        </div>
        <Outlet />
      </section>
    </div>
  );
};

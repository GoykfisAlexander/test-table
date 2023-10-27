import styles from "./index.module.css";
import React from "react";
import Search from "./search";
import DateFilter from "./date-filter";
import StatusFilter from "./status-filter";

const FilterBar: React.FC = () => {
  return (
    <div className={styles.filter_bar}>
      <Search />
      <DateFilter />
      <StatusFilter />
    </div>
  );
};
export default FilterBar;

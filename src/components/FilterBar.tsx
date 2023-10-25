import React from "react";
import Search from "./ui/Search";
import DateFilter from "./ui/DateFilter";
import DropDownListModal from "./ui/DropDownListModal";

const FilterBar: React.FC = () => {
  return (
    <div className="filter-bar d-flex my-2" style={{ gap: 20 }}>
      <Search />
      <DateFilter />
      <DropDownListModal />
    </div>
  );
};
export default FilterBar;

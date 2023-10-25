import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setPage, setSearch } from "../../app/tableSlice";
import SearchIcon from "./SearchIcon";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.table.search);

  const labelRef = useRef<HTMLLabelElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
    dispatch(setPage(1)); // Переход на первую страницу при изменении поиска
  };

  const handleInputFocus = () => {
    if (labelRef.current) {
      labelRef.current.classList.add("focused");
    }
  };

  const handleInputBlur = () => {
    if (labelRef.current) {
      labelRef.current.classList.remove("focused");
    }
  };

  return (
    <label ref={labelRef} className="d-flex rounded-pill  search-label">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder="Поиск"
      />
      <button className="search-button">
        <SearchIcon />
      </button>
    </label>
  );
};

export default Search;

import styles from "./index.module.css";
import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setPage, setSearch } from "../../../app/slices/tableSlice";
import SearchIcon from "../../ui/icons/SearchIcon";

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
      labelRef.current.style.borderColor = "#ffd200";
    }
  };

  const handleInputBlur = () => {
    if (labelRef.current) {
      labelRef.current.style.borderColor = "#dadada";
    }
  };

  return (
    <label ref={labelRef} className={styles.label}>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder="Поиск"
        className={styles.input}
      />
      <button className={styles.button}>
        <SearchIcon />
      </button>
    </label>
  );
};

export default Search;

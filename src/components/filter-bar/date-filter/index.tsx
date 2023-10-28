import styles from "./index.module.css";
import React from "react";
import {
  setEndDate,
  setPage,
  setStartDate,
} from "../../../app/slices/tableSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
//  Фильтр по дате
const DateFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const startDate = useAppSelector((state) => state.table.startDate);
  const endDate = useAppSelector((state) => state.table.endDate);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartDate(e.target.value));
    dispatch(setPage(1)); // Переход на первую страницу при изменении начальной даты
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEndDate(e.target.value));
    dispatch(setPage(1)); // Переход на первую страницу при изменении конечной даты
  };

  return (
    <div className={styles.container}>
      <label htmlFor="startDate">
        с
        <input
          className={`${styles.input} ${startDate ? "" : styles.no_value}`}
          id="startDate"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </label>

      <label htmlFor="endDate">
        по
        <input
          className={`${styles.input} ${endDate ? "" : styles.no_value}`}
          id="endDate"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </label>
    </div>
  );
};
export default DateFilter;

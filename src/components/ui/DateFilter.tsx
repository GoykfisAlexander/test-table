import React from "react";
import { setEndDate, setPage, setStartDate } from "../../app/tableSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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
    <div className="d-flex ">
      <label htmlFor="startDate">
        с
        <input
          className="mx-2"
          id="startDate"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          placeholder="Начальная дата"
        />
      </label>

      <label htmlFor="endDate">
        по
        <input
          className="mx-2"
          id="endDate"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          placeholder=""
        />
      </label>
    </div>
  );
};
export default DateFilter;

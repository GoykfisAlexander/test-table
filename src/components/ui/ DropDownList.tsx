import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setFilter, setPage } from "../../app/tableSlice";
const DropDownList: React.FC = () => {
  const dispatch = useAppDispatch();
  const statusFilter = useAppSelector((state) => state.table.statusFilter);
  const handleStatusFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setFilter(e.target.value));
    dispatch(setPage(1)); // Переход на первую страницу при изменении фильтра статуса
  };
  return (
    <select value={statusFilter} onChange={handleStatusFilterChange}>
      <option value="all">Все</option>
      <option value="active">Активный</option>
      <option value="canceled">Отмененный</option>
      <option value="completed">Завершенный</option>
    </select>
  );
};
export default DropDownList;

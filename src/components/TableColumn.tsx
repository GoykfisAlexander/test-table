import React from "react";
//  Заголовки столбцов
const TableColumn: React.FC = () => {
  return (
    <thead className="column">
      <tr>
        <th>Название</th>
        <th style={{ width: "35%" }}>Описание</th>
        <th>Пользователь</th>
        <th>Дата создания</th>
        <th>Дата исполнения</th>
        <th>Статус</th>
      </tr>
    </thead>
  );
};
export default TableColumn;

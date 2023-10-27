import styles from "./index.module.css";
import React from "react";
//  Заголовки столбцов
const TableHeader: React.FC = () => {
  return (
    <thead className={styles.thead}>
      <tr>
        <th>Название</th>
        <th className={styles.description}>Описание</th>
        <th>Пользователь</th>
        <th>Дата создания</th>
        <th>Дата исполнения</th>
        <th>Статус</th>
      </tr>
    </thead>
  );
};
export default TableHeader;

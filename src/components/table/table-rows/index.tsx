import styles from "./index.module.css";
import React from "react";
import { useAppSelector } from "../../../app/hooks";

//   Данные таблицы
const TableRows: React.FC = () => {
  const tableData = useAppSelector((state) => state.table.data);
  return (
    <tbody>
      {tableData.map((item, index) => (
        <tr className={styles.row} key={"row" + index}>
          <td>{item.title}</td>
          <td
            className={item.description.length > 200 ? styles.description : ""}
          >
            {item.description.length > 1000
              ? `${item.description.substring(0, 1000)}...`
              : item.description}
          </td>
          <td>{item.user}</td>
          <td>{new Date(item.creationDate).toLocaleDateString()}</td>
          <td>
            {item.executionDate
              ? new Date(item.executionDate).toLocaleDateString()
              : "–"}
          </td>
          <td>{item.status}</td>
        </tr>
      ))}
    </tbody>
  );
};
export default TableRows;

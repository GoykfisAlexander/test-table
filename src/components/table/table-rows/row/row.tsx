import { TableItem } from "../../../../data";
import styles from "./index.module.css";
import React, { useState } from "react";
//  Заголовки столбцов
interface IProps {
  item: TableItem;
  index: number;
}
const Row: React.FC<IProps> = ({ item, index }) => {
  const [longDescription, setLongDescription] = useState(true);

  return (
    <tr className={styles.row}>
      <td>{item.title}</td>
      <td
        onClick={() => {
          setLongDescription(!longDescription);
        }}
        className={`${styles.description} ${
          item.description.length > 200 && longDescription
            ? styles.longDescription
            : ""
        }`}
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
  );
};
export default Row;

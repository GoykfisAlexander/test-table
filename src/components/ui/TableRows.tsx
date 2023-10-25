import React from "react";
import { useAppSelector } from "../../app/hooks";

//   Данные таблицы
const TableRows: React.FC = () => {
  const tableData = useAppSelector((state) => state.table.data);
  return (
    <tbody>
      {tableData.map((item) => (
        <tr
          className=" border  font-weight-normal "
          style={{
            height: "60px",
          }}
          key={item.id + Math.random()}
        >
          <td>{item.title}</td>
          <td
            style={
              item.description.length > 200
                ? {
                    display: "flex",
                    height: "60px",
                    alignItems: "start",
                    overflow: "scroll",
                  }
                : {}
            }
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

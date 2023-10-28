import React from "react";
import { useAppSelector } from "../../../app/hooks";
import Row from "./row/row";

const TableRows: React.FC = () => {
  const tableData = useAppSelector((state) => state.table.data);
  return (
    <tbody>
      {tableData.map((item, index) => (
        <Row item={item} index={index} key={"row" + index} />
      ))}
    </tbody>
  );
};
export default TableRows;

import React, { useEffect } from "react";
import { fetchTableData } from "../../app/slices/tableSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import TableRows from "./table-rows";
import TableHeader from "./table-header";
import Pagination from "./pagination";

const Table: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.table.currentPage);
  const search = useAppSelector((state) => state.table.search);
  const statusFilter = useAppSelector((state) => state.table.statusFilter);
  const startDate = useAppSelector((state) => state.table.startDate);
  const endDate = useAppSelector((state) => state.table.endDate);
  const itemsPerPage = useAppSelector((state) => state.table.itemsPerPage);

  useEffect(() => {
    dispatch(
      fetchTableData(
        currentPage,
        search,
        statusFilter,
        startDate,
        endDate,
        itemsPerPage
      )
    );
  }, [
    dispatch,
    currentPage,
    search,
    statusFilter,
    startDate,
    endDate,
    itemsPerPage,
  ]);

  return (
    <>
      <div
        className="border mt-3 mx-3"
        style={{ height: "53em", fontSize: "14em", overflow: "scroll" }}
      >
        <table style={{ width: "100%" }}>
          <TableHeader />
          <TableRows />
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default Table;

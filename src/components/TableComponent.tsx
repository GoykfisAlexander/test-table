import React, { useEffect } from "react";
import { fetchTableData } from "../app/tableSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import TableColumn from "./TableColumn";
import TableRows from "./ui/TableRows";
import Pagination from "./Pagination";
import TableHeader from "./TableHeader";

const TableComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.table.currentPage);
  const search = useAppSelector((state) => state.table.search);
  const statusFilter = useAppSelector((state) => state.table.statusFilter);
  const startDate = useAppSelector((state) => state.table.startDate);
  const endDate = useAppSelector((state) => state.table.endDate);
  useEffect(() => {
    dispatch(
      fetchTableData(currentPage, search, statusFilter, startDate, endDate)
    );
  }, [dispatch, currentPage, search, statusFilter, startDate, endDate]);

  return (
    <section className="d-flex flex-column mx-auto col-10 my-5">
      <TableHeader />
      <table
        className="table-hover border mt-3 mx-3"
        style={{ maxHeight: "500px", fontSize: "0.85rem" }}
      >
        <TableColumn />
        <TableRows />
      </table>
      <Pagination />
    </section>
  );
};

export default TableComponent;

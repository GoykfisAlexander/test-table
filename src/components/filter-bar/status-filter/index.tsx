import styles from "./index.module.css";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setFilter, setPage } from "../../../app/slices/tableSlice";
import RectangleUpIcon from "../../ui/icons/RectangleUpIcon";
import RectangleDownIcon from "../../ui/icons/RectangleDownIcon";

const StatusFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const statusFilter = useAppSelector((state) => state.table.statusFilter);
  const [showModal, setShowModal] = useState(false);

  const handleStatusFilterChange = (value: string) => {
    dispatch(setFilter(value));
    dispatch(setPage(1));
    closeStatusFilter();
  };
  const closeStatusFilter = () => {
    setTimeout(() => setShowModal(false), 0);
  };

  const statusMap: Record<string, string> = {
    all: "Все",
    active: "Активный",
    canceled: "Отмененный",
    completed: "Завершенный",
  };

  return (
    <>
      {showModal && (
        <div onClick={closeStatusFilter} className={styles.mask}></div>
      )}

      <div
        className={`${styles.status_filter} ${showModal ? styles.focused : ""}`}
        id="dropdown-container"
        onClick={() => {
          setShowModal((prevShowModal) => !prevShowModal);
        }}
      >
        <span>{statusMap[statusFilter]}</span>

        {showModal ? <RectangleUpIcon /> : <RectangleDownIcon />}
        {showModal && (
          <div className={styles.drop_down_list}>
            {["all", "active", "canceled", "completed"].map((status) => (
              <div
                className={statusFilter === status ? styles.active : ""}
                key={status}
                onClick={() => handleStatusFilterChange(status)}
              >
                {statusMap[status]}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default StatusFilter;

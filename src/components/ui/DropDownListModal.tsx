import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setFilter, setPage } from "../../app/tableSlice";
import RectangleUpIcon from "./RectangleUpIcon";
import RectangleDownIcon from "./RectangleDownIcon";

const DropDownList: React.FC = () => {
  const dispatch = useAppDispatch();
  const statusFilter = useAppSelector((state) => state.table.statusFilter);
  const [showModal, setShowModal] = useState(false);

  const handleStatusFilterChange = (value: string) => {
    dispatch(setFilter(value));
    dispatch(setPage(1));
    setTimeout(() => setShowModal(false));
  };

  const statusMap: Record<string, string> = {
    all: "Все",
    active: "Активный",
    canceled: "Отмененный",
    completed: "Завершенный",
  };

  return (
    <>
      <div
        className={`drop-down-button justify-content-between 
        ${showModal ? "focused" : ""}`}
        id="dropdown-container"
        onClick={() => {
          setShowModal((prevShowModal) => !prevShowModal);
        }}
        style={{ cursor: "pointer", width: 164 }}
      >
        <span>{statusMap[statusFilter]}</span>
        {showModal ? <RectangleUpIcon /> : <RectangleDownIcon />}
        {showModal && (
          <div className="drop-down-list">
            <div
              className="dropdown-item"
              onClick={() => handleStatusFilterChange("all")}
            >
              Все
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleStatusFilterChange("active")}
            >
              Активный
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleStatusFilterChange("canceled")}
            >
              Отмененный
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleStatusFilterChange("completed")}
            >
              Завершенный
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDownList;

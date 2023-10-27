import React from "react";
import FilterBar from "../filter-bar";

const Header: React.FC = () => {
  return (
    <div>
      <div className="mx-3">
        <h5 className="font-weight-bold">ТАБЛИЦА</h5>
        <FilterBar />
      </div>
      <div
        style={{
          height: 1,
          background: "#DADADA",
          boxShadow: "2px 3px 6px 0px rgba(0, 0, 0, 0.16)",
        }}
      ></div>
    </div>
  );
};
export default Header;

import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPage } from "../app/tableSlice";

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.table.currentPage);
  const totalPages = useAppSelector((state) => state.table.totalPages);

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <>
      {totalPages > 0 && (
        <div style={{ fontSize: "0.85rem" }} className="mx-auto mt-5">
          <button
            className={`button ${currentPage === 1 ? "no-active" : ""}`}
            onClick={handlePrevPage}
          >
            {"<"}
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                className={`button ${currentPage === page ? "active" : ""}`}
                key={page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
          <button
            className={`button ${
              currentPage === totalPages ? "no-active" : ""
            }`}
            onClick={handleNextPage}
          >
            {">"}
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;

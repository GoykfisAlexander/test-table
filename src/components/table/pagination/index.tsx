import styles from "./index.module.css";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setPage } from "../../../app/slices/tableSlice";

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
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const getStartIndex = () => {
    const conditions = [
      currentPage === 1,
      currentPage === 2,
      currentPage > 2 && currentPage < totalPages - 1,
      currentPage === totalPages - 1,
      currentPage === totalPages,
    ];
    return currentPage - conditions.indexOf(true);
  };

  const getEndIndex = () => {
    const conditions = [
      currentPage === totalPages,
      currentPage === totalPages - 1,
      currentPage > 2 && currentPage < totalPages - 1,
      currentPage === 2,
      currentPage === 1,
    ];
    return currentPage + conditions.indexOf(true) - 1;
  };
  const pagesArraySlice =
    totalPages < 5
      ? pages
      : [
          pages[0],
          totalPages > 5 && currentPage > 3 ? 0 : NaN,
          ...pages.slice(getStartIndex(), getEndIndex()),
          totalPages > 5 && currentPage < totalPages - 2 ? 0 : NaN,
          pages[totalPages - 1],
        ];

  return (
    <>
      {totalPages > 0 && (
        <div className={styles.pagination}>
          <button
            className={`${styles.button} ${
              currentPage === 1 ? styles.no_active : ""
            }`}
            onClick={handlePrevPage}
          >
            {"<"}
          </button>
          {pagesArraySlice.map((page, index) =>
            page ? (
              <button
                className={`${styles.button} ${
                  currentPage === page ? styles.active : ""
                }`}
                key={"page" + index}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ) : // eslint-disable-next-line no-self-compare
            page !== page ? null : (
              <span key={"span" + index} className={styles.button}>
                ...
              </span>
            )
          )}
          <button
            className={`${styles.button} ${
              currentPage === totalPages ? styles.no_active : ""
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

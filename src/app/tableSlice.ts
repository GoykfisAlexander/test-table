import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { mockData, TableItem } from "../data";

interface TableState {
  data: TableItem[];
  currentPage: number;
  totalPages: number;
  search: string;
  statusFilter: string;
  startDate: string;
  endDate: string;
}

const initialState: TableState = {
  data: [],
  currentPage: 1,
  totalPages: 1,
  search: "",
  statusFilter: "all",
  startDate: "",
  endDate: "",
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTableData: (state, action: PayloadAction<TableItem[]>) => {
      state.data = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.statusFilter = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
  },
});

export const {
  setTableData,
  setPage,
  setSearch,
  setStartDate,
  setEndDate,
  setFilter,
  setTotalPages,
} = tableSlice.actions;
export const fetchTableData =
  (
    page: number,
    search: string,
    statusFilter: string,
    startDate: string,
    endDate: string
  ): AppThunk =>
  async (dispatch) => {
    try {
      const itemsPerPage = 8;
      const startIndex = (page - 1) * itemsPerPage;
      const filterMockData = mockData.filter((item) => {
        // Условие для фильтрации по поиску
        const searchCondition =
          !search ||
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(search.toLowerCase())
          );

        // Условие для фильтрации по дате
        const dateCondition =
          (!startDate || new Date(item.creationDate) >= new Date(startDate)) &&
          (!endDate || new Date(item.executionDate) <= new Date(endDate));

        // Условие для фильтрации по статусу
        const statusMap: Record<string, string> = {
          active: "Активный",
          canceled: "Отмененный",
          completed: "Завершенный",
        };
        const statusCondition =
          statusFilter === "all" || item.status === statusMap[statusFilter];

        return dateCondition && statusCondition && searchCondition;
      });
      const totalPages = Math.ceil(filterMockData.length / itemsPerPage);
      const sliceFilterMockData = filterMockData.slice(
        startIndex,
        startIndex + itemsPerPage
      );
      dispatch(setTableData(sliceFilterMockData));
      dispatch(setTotalPages(totalPages));
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };
export default tableSlice.reducer;

export interface TableItem {
  id: number;
  title: string;
  description: string;
  user: string;
  creationDate: string;
  executionDate: string;
  status: string;
}
export const mockData: TableItem[] = Array(42)
  .fill([
    {
      id: 1,
      title: "Название 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      user: "Иванов В. Н.",
      creationDate: "2023-01-02",
      executionDate: "",
      status: "Активный",
    },
    {
      id: 2,
      title: "Название 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      user: "Сидоров В. Н.",
      creationDate: "2023-01-02",
      executionDate: "2023-01-02",
      status: "Завершенный",
    },
    {
      id: 3,
      title: "Название 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ".repeat(
          15
        ),
      user: "Гойхфис А.Л.",
      creationDate: "2023-01-03",
      executionDate: "2023-01-15",
      status: "Отмененный",
    },
  ])
  .flat();

export type CategoryType = "Hourly" | "Daily" | "Todo";

export type TaskType = {
  id?: number;
  title: string;
  completed: boolean;
  category: CategoryType;
};

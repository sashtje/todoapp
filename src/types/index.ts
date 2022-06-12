export interface Todo {
  id: string;
  title: string;
  isActive: boolean;
}

export enum Filter {
  All,
  Active,
  Completed,
}

export interface AppState {
  todos: Todo[];
  filter: Filter;
}

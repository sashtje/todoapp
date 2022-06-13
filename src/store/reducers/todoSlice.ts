import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { AppState, Filter, Todo } from '../../types';

export const initialState: AppState = {
  todos: [
    { id: uuidv4(), title: 'Тестовое задание', isActive: true },
    { id: uuidv4(), title: 'Прекрасный код', isActive: false },
    { id: uuidv4(), title: 'Покрытие тестами', isActive: true },
  ],
  filter: Filter.All,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },

    addTodo(state, action: PayloadAction<Todo>) {
      state.todos = [...state.todos, action.payload];
    },

    changeActive(state, action: PayloadAction<string>) {
      const todo = state.todos.find((item) => item.id === action.payload) as Todo;
      todo.isActive = !todo.isActive;
    },

    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
  },
});

export const { setTodos, addTodo, changeActive, setFilter } = todoSlice.actions;
export default todoSlice.reducer;

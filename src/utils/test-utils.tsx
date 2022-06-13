import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import userEvent from '@testing-library/user-event';

// Import your own reducer
import todoReducer from '../store/reducers/todoSlice';

import { AppState, Filter, RenderOptions } from '../types';

const initialState: AppState = {
  todos: [
    { id: uuidv4(), title: 'Тестовое задание', isActive: true },
    { id: uuidv4(), title: 'Прекрасный код', isActive: false },
    { id: uuidv4(), title: 'Покрытие тестами', isActive: true },
  ],
  filter: Filter.All,
};

function render(
  ui: JSX.Element,
  {
    preloadedState = initialState,
    store = configureStore({ reducer: todoReducer, preloadedState }),
    ...renderOptions
  }: RenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };

export const todosLengthIsEqual = (length: number) => {
  const todos = document.querySelectorAll('.todo');
  expect(todos.length).toBe(length);
};

export const addTodo = (text: string) => {
  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('');

  userEvent.type(input, `${text}{enter}`);

  expect(input).toHaveValue('');
};

export const clickTodoWithIndex = (index: number) => {
  const radio = document.querySelectorAll('.todo__radio')[index] as HTMLElement;
  userEvent.click(radio);
};

export const getBtn = (title: string) => {
  return screen.getByRole('button', {
    name: title,
  });
};

export const isFilterBtnActive = (btn: HTMLElement) => {
  expect(btn).toHaveClass('filter-btn filter-btn_is_active');
};

export const isFilterBtnNotActive = (btn: HTMLElement) => {
  expect(btn).not.toHaveClass('filter-btn filter-btn_is_active');
};

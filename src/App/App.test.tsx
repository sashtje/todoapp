import {
  render,
  screen,
  fireEvent,
  todosLengthIsEqual,
  addTodo,
  clickTodoWithIndex,
  getBtn,
  isFilterBtnActive,
  isFilterBtnNotActive,
} from '../utils/test-utils';
import userEvent from '@testing-library/user-event';

import App from './App';

beforeEach(() => {
  render(<App />);
});
//========================================
describe('add todo', () => {
  test('add empty todo', () => {
    todosLengthIsEqual(3);

    addTodo(' ');

    todosLengthIsEqual(3);
  });

  test('add not empty todo', () => {
    todosLengthIsEqual(3);

    addTodo('Почитать про Node');

    todosLengthIsEqual(4);
  });
});
//========================================

test('items left', () => {
  todosLengthIsEqual(3);

  screen.getByText(/2 items left/i);

  addTodo('Почитать про Node');

  todosLengthIsEqual(4);

  screen.getByText(/3 items left/i);
});
//========================================

test('change isActive for todo', () => {
  todosLengthIsEqual(3);

  screen.getByText(/2 items left/i);

  clickTodoWithIndex(0);

  screen.getByText(/1 items left/i);

  clickTodoWithIndex(1);

  screen.getByText(/2 items left/i);
});
//========================================

test('clear completed', () => {
  todosLengthIsEqual(3);

  screen.getByText(/2 items left/i);

  const clearBtn = screen.getByRole('button', {
    name: /clear completed/i,
  });
  userEvent.click(clearBtn);

  todosLengthIsEqual(2);
  screen.getByText(/2 items left/i);
});
//========================================

describe('filter tests', () => {
  test('filter all', () => {
    const btnAll = getBtn('All');
    isFilterBtnActive(btnAll);

    screen.getByText(/2 items left/i);
  });

  test('filter active', () => {
    const btnAll = getBtn('All');
    isFilterBtnActive(btnAll);

    screen.getByText(/2 items left/i);

    const btnActive = getBtn('Active');
    isFilterBtnNotActive(btnActive);

    userEvent.click(btnActive);
    isFilterBtnActive(btnActive);
    isFilterBtnNotActive(btnAll);

    todosLengthIsEqual(2);
  });

  test('filter completed', () => {
    const btnAll = getBtn('All');
    isFilterBtnActive(btnAll);

    screen.getByText(/2 items left/i);

    const btnCompleted = getBtn('Completed');
    isFilterBtnNotActive(btnCompleted);

    userEvent.click(btnCompleted);
    isFilterBtnActive(btnCompleted);
    isFilterBtnNotActive(btnAll);

    todosLengthIsEqual(1);
  });
});

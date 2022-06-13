import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from '../App/App';

import { setupStore } from '../store/';
import { initialState } from './reducers/todoSlice';
import { todosLengthIsEqual } from '../utils/test-utils';

test('test setupStore', () => {
  const numberTodos = initialState.todos.length;

  const store = setupStore();
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  todosLengthIsEqual(numberTodos);
});

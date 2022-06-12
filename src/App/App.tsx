import { Provider } from 'react-redux';

import Board from '../components/Board';

import { setupStore } from '../store';

import './App.scss';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <main className="app">
        <h1 className="app__title">todos</h1>

        <Board />
      </main>
    </Provider>
  );
}

export default App;

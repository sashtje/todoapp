import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './App/App';

import { setupStore } from '../src/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

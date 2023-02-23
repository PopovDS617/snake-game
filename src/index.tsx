import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import store from '../src/store/store';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimatePresence mode="wait" initial={true}>
        <App />
      </AnimatePresence>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lotteries from './main';

import { Provider } from 'react-redux';
import store from './store/storeConfig'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Lotteries />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

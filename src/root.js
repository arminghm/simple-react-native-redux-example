import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './app';

let store = configureStore();

export default Root = () =>
  <Provider store = {store} >
    <App/>
  </Provider>

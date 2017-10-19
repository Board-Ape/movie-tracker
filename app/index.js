import React, { Component } from 'react';
import App from './components/App/App';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import configureStore from './store/configureStore';
import './main.scss';


const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('main')
);

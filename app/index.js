
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import MovieIndex from './components/movieIndex';
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

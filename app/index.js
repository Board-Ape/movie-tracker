import React, { Component } from 'react';
import App from './components/App/App';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import configureStore from './store/configureStore';
import './main.scss';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

const history = createHistory()

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main')
);

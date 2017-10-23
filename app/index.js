import React from 'react';
import App from './components/App/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './main.scss';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

const history = createHistory();

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main')
);

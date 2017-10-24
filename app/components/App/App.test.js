import React from 'react';
import { shallow, mount, configure } from 'enzyme'
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../../actions/index'
import configureStore from 'redux-mock-store';
import { BrowserRouter, Route, Link } from 'react-router-dom'

configure({ adapter: new Adapter() })

describe('App', () => {
  let wrapper;
  const mockStore = configureStore()
  const intialState = { movies: [] }
  const store = mockStore(intialState)

  beforeEach( () => {
    wrapper = shallow(<App store={ store } />);
  });

  it('should create an instance of a App', () => {

    expect(wrapper).toMatchSnapshot();
  })
});

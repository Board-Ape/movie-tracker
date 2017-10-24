import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import * as actions from '../../actions/index';

describe('Header', () => {
  let wrapper;
  const mockStore = configureStore()
  const intialState = []
  const store = mockStore(intialState)
  const mockFunc = jest.fn();

  beforeEach( () => {

    wrapper = shallow(<Header store={ store }
                                  />);
  });

  it('should create an instance of a signin', () => {

    expect(wrapper).toMatchSnapshot();
  });

});

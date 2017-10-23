import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import SignUp from './SignUp';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import * as actions from '../../actions/index';

describe('SignUp', () => {
  let wrapper;
  const mockStore = configureStore();
  const intialState = { name: 'derp',
    email: 'derp@derp.com',
    password: 'derp'};
  const store = mockStore(intialState);
  const mockFunc = jest.fn();

  beforeEach( () => {

    wrapper = shallow(<SignUp store={ store }
    />);
  });

  it('should create an instance of a signup', () => {

    expect(wrapper).toMatchSnapshot();
  });

});

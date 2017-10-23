import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import SignIn from './SignIn';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import * as actions from '../../actions/index';

describe('SignIn', () => {
  let wrapper;
  const mockStore = configureStore();
  const intialState = { email: 'derp@derp.com',
    password: 'derp'};
  const store = mockStore(intialState);
  const mockFunc = jest.fn();

  beforeEach( () => {

    wrapper = shallow(<SignIn store={ store }
    />);
  });

  it('should create an instance of a signin', () => {

    expect(wrapper).toMatchSnapshot();
  });

});

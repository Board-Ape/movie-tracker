import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import MovieCatalog from './MovieCatalog/MovieCatalog';
import MovieCard from './MovieCard/MovieCard';
import mockMovieData from '../../utils/mockMovieData';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../actions/index';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('MovieCatalog', () => {
  let wrapper;
  const mockMovie = mockMovieData;
  const mockStore = configureStore();
  const intialState = { movies: [mockMovie] };
  const store = mockStore(intialState);
  const mockFunc = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<MovieCatalog store={ store } />);
  });

  it('should create an instance of a MovieCatalog', () => {

    expect(wrapper).toMatchSnapshot();
  });
});

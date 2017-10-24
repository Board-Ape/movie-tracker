import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import MovieCatalog from '../MovieCatalog/MovieCatalog';
import MovieCard from './MovieCard';
import mockMovieData from '../../../utils/mockMovieData';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import * as actions from '../../actions/index';

configure({ adapter: new Adapter() })


describe('MovieCard', () => {
  let wrapper;
  const mockMovie = mockMovieData
  const mockStore = configureStore()
  const intialState = { movies: [mockMovie.results] }
  const store = mockStore(intialState)
  const mockFunc = jest.fn();

  beforeEach( () => {

    wrapper = shallow(<MovieCard store={ store }
                                  key={mockMovie.id}
                                  title={mockMovie.title}
                                  toggleFavorite={mockFunc}/>);
  });

  it('should create an instance of a card', () => {

    expect(wrapper).toMatchSnapshot();
  });
});

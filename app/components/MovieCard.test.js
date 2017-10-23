import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import MovieCatalog from './MovieCatalog/MovieCatalog';
import MovieCard from './MovieCard/MovieCard';
import mockMovieData from '../../utils/mockMovieData';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import * as actions from '../actions/index';

configure({ adapter: new Adapter() });


describe('MovieCard', () => {
  let wrapper;
  const mockMovie = mockMovieData;
  const mockStore = configureStore();
  const intialState = { movies: [mockMovie.results] };
  const store = mockStore(intialState);
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

  it.skip('should render an img', () => {
    const img = wrapper.find('img');
    expect(img.length).toEqual(1);
    expect(img.html().includes(movie.poster)).toEqual(true);
  });

  it.skip('should have a button that can be clicked', () => {
    const button = wrapper.find('button');

    expect(mockFunc).toHaveBeenCalledTimes(0);
    button.simulate('click');
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});

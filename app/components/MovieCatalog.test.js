import React from 'react';
import { shallow, mount, configure } from 'enzyme'
import MovieCatalog from './MovieCatalog/MovieCatalog'
import MovieCard from './MovieCard/MovieCard';
import movie1 from '../../utils/mockData';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../actions/index'

configure({ adapter: new Adapter() })

describe('MovieCatalog', () => {
  let wrapper;
  const mockMovie = movie1

  beforeEach( () => {
    wrapper = shallow(<MovieCatalog />);
  });

  it.skip('should create an instance of a MovieCatalog', () => {

    expect(wrapper).toMatchSnapshot();
  })
});

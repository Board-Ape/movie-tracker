import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieCatalog from './MovieCatalog/MovieCatalog'
import MovieCard from './MovieCard/MovieCard';
import movie1 from '../../utils/mockData';

describe('MovieCard', () => {
  let wrapper;
  const mockMovie = movie1

  beforeEach( () => {

  });

  it('should create an instance of a card', () => {

    wrapper = shallow(<MovieCard key={mockMovie.id}
                                  title={mockMovie.title} />);

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have a button that can be clicked', () => {
    const mockFunc = jest.fn();
    const wrapper = mount(<MovieCard key={mockMovie.id}
                                      title={mockMovie.title} />);
    const button = wrapper.find('button');

    expect(mockFunc).toHaveBeenCalledTimes(0);
    button.simulate('click');
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('should create an instance of a MovieCatalog', () => {
    wrapper = shallow(<MovieCatalog />);

    expect(wrapper).toMatchSnapshot();
  })
});

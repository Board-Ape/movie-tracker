import React from 'react';
import { shallow, mount, configure } from 'enzyme'
import MovieCatalog from './MovieCatalog/MovieCatalog'
import MovieCard from './MovieCard/MovieCard';
import movie1 from '../../utils/mockData';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../actions/index'

configure({ adapter: new Adapter() })


describe('MovieCard', () => {
  let wrapper;
  const mockMovie = movie1
  const mockStore = configureStore()
  const intialState = { todos: [] }
  const store = mockStore(intialState)

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

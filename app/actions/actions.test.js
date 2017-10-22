import * as actions from './index';
import movieMock from '../../utils/mockData'

describe('actions', () => {
  it('should return an error when bool is true', () => {

    const movieError = true

    const expected = {
      type: 'MOVIES_HAS_ERRORED',
      hasErrored: true
    }

    const expectation = actions.moviesHasErrored(movieError)

    expect(expectation).toEqual(expected)
  })

  it('should return is loading when bool is true', () => {

    const movieLoading = true

    const expected = {
      type: 'MOVIES_IS_LOADING',
      isLoading: true
    }

    const expectation = actions.moviesIsLoading(movieLoading)

    expect(expectation).toEqual(expected)
  })

  it('should return movies when fetch is a success', () => {

    const movies = movieMock

    const expected = {
      type: 'MOVIES_FETCH_DATA_SUCCESS',
      movies
    }

    const expectation = actions.moviesFetchDataSuccess(movies)

    expect(expectation).toEqual(expected)
  })

  it.skip('should return movie array', () => {

    const movies = movie1

    const expected = movies

    const expectation = actions.fetchMovieList('../../utils/mockData.js')

    expect(expectation).toEqual(expected)
  })

  it('should create an action to detect if user fetch succeeded', () => {
    const mockUser = { name: 'DAVID' };
    const expectedAction = {
      type: 'SET_ACTIVE_USER',
      user: mockUser
    };

    expect(actions.setActiveUser(mockUser)).toEqual(expectedAction);
  });


});

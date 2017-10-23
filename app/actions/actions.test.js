import * as actions from './index';
import mockMovieData from '../../utils/mockMovieData'

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

  it('should create an action to detect if data fetch succeeded', () => {
    const expectedAction = {
      type: 'MOVIES_FETCH_DATA_SUCCESS',
      movies: mockMovieData.results
    };

  expect(actions.moviesFetchDataSuccess(mockMovieData.results)).toEqual(expectedAction);
});

  it('should return movie array', () => {

    const expected = [movieMock]

    const expectation = actions.fetchMovieList('../../utils/mockData.js')

    expect(expectation).toEqual(expected)
  })

  it('should create an action to detect if user fetch succeeded', () => {
    const mockUser = { name: 'DAVID' };
    const expectedAction = {
      type: 'SET_USER_TO_STATE',
      user: mockUser
    };

    expect(actions.setUserToState(mockUser)).toEqual(expectedAction);
  });


});

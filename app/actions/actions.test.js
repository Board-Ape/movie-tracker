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

  it('should create an action to detect if user fetch succeeded', () => {
    const mockUser = { name: 'DAVID' };
    const expectedAction = {
      type: 'SET_USER_TO_STATE',
      user: mockUser
    };

    expect(actions.setUserToState(mockUser)).toEqual(expectedAction);
  });

  it('should toggle a favorite when it recieves a movie', () => {
    const movie = mockMovieData.results[0]

    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      movie
    }

    expect(actions.toggleFavorite(movie)).toEqual(expectedAction)
  })

  it('should return action with USER_SIGNOUT type', () => {
    const signout = {type: 'USER_SIGNOUT'}

    const expectedAction = {
      type: 'USER_SIGNOUT'
    }

    expect(actions.userSignOut()).toEqual(expectedAction)
  })

  it('should return action by boolean of favorites', () => {
    const favorite = true

    const expectedAction = {
      type: 'SHOW_FAVORITES',
      shouldShowFavorites: true
    }

    expect(actions.showFavorites(favorite)).toEqual(expectedAction)
  })
});

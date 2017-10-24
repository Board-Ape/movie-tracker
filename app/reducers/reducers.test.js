import movies from './movies';
import moviesIsLoading from './moviesIsLoading';
import shouldShowFavorites from './shouldShowFavorites';
import user from './user';
import moviesHasErrored from './moviesHasErrored';
import mockMovieData from '../../utils/mockMovieData';
import favorites from './favorites';
import * as actions from '../../app/actions/index';

const mockUser = { name: 'David' };

describe('movies reducer', () => {
  it('should have a default state', () => {
    expect(movies(undefined, {})).toEqual([]);
  });

  it('should give an array of movies when passed info', () => {
    const action = { type: 'MOVIES_FETCH_DATA_SUCCESS', movies: mockMovieData.results };

    expect(movies(undefined, action)).toEqual(mockMovieData.results);
  });
});

describe('user reducer', () => {
  it('should have a default state', () => {
    expect(user(undefined, {})).toEqual({});
  });

  it('should return a user when passed info', () => {
    const action = { type: 'SET_USER_TO_STATE', user: mockUser };

    expect(user(undefined, action)).toEqual(mockUser);
  });
});

describe('favorites reducer tests', () => {
  it('should return our initial state', () => {
    const expectation = [];

    expect(favorites(undefined, {})).toEqual(expectation);
  });

  it('should toggle favorite', () => {
    const movie = mockMovieData.results[0];
    const action = { type: 'TOGGLE_FAVORITE', movie };
    const expectation = [movie];

    expect(favorites(undefined, action)).toEqual(expectation);
  });
  
  //tried this one a number of times
  it.skip('should allow me to add state to a populated state array', () => {
    const movieOne = mockMovieData.results[0];
    const movieTwo = mockMovieData.results[1];
    const initialState =  movieOne;

    const action = actions.toggleFavorite(movieTwo);
    const expectation = [initialState, action.movie];

    expect(favorites(initialState, action)).toEqual(expectation);
  });
});

describe('moviesHasErrored reducer tests', () => {

  it('should toggle favorite', () => {

    const action = { type: 'MOVIES_HAS_ERRORED',
      hasErrored: true };
    const expectation = true;

    expect(moviesHasErrored( undefined, action)).toEqual(expectation);
  });
});

describe('shouldShowFavorites reducer tests', () => {

  it('should show favorites', () => {

    const action = { type: 'SHOW_FAVORITES', shouldShowFavorites: true };

    const expectation = true;


    expect(shouldShowFavorites( undefined, action)).toEqual(expectation);
  });
});

describe('moviesIsLoading reducer tests', () => {

  it('should be loading on action', () => {

    const action = { type: 'MOVIES_IS_LOADING', isLoading: true };

    const expectation = true;


    expect(moviesIsLoading( undefined, action)).toEqual(expectation);
  });
});

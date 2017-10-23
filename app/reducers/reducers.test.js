import movies from './movies';
import user from './user';
import mockMovieData from '../../utils/mockMovieData';
import favorites from './favorites';

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

import movies from './movies';
import user from './user';
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
    const expectation = []

    expect(favorites(undefined, {})).toEqual(expectation);
  });

  it('should toggle favorite', () => {
    const movie = mockMovieData.results[0]
    const action = { type: 'TOGGLE_FAVORITE', movie };
    const expectation = [movie];

    expect(favorites(undefined, action)).toEqual(expectation);
  });

  it('should allow me to add state to a populated state array', () => {
    const movieOne = mockMovieData.results[0]
    const movieTwo = mockMovieData.results[1]
    const initialState =  movieOne

    const action = actions.toggleFavorite(movieTwo);
    const expectation  = [ initialState, action.movie ]

    expect(favorites(initialState[0], action)).toEqual(expectation)
  })
});

describe('moviesHasErrored reducer tests', () => {
  it('should return our initial state', () => {
    const expectation = []

    expect(moviesHasErrored(undefined, {})).toEqual(expectation);
  });

  it('should toggle favorite', () => {
    const movie = mockMovieData.results[0]
    const action = { type: 'TOGGLE_FAVORITE', movie };
    const expectation = [movie];

    expect(favorites(undefined, action)).toEqual(expectation);
  });

  it('should allow me to add state to a populated state array', () => {
    const movieOne = mockMovieData.results[0]
    const movieTwo = mockMovieData.results[1]
    const initialState =  movieOne

    const action = actions.toggleFavorite(movieTwo);
    const expectation  = [ initialState, action.movie ]

    expect(favorites(initialState[0], action)).toEqual(expectation)
  })
});

// describe.skip('todos reducer tests', () => {
//   it('should return our initial state', () => {
//     const expectation = []
//
//     expect(todos(undefined, {})).toEqual(expectation);
//   });
//
//   it('should allow me to add an idea to the state', () => {
//     const action = { type: 'ADD_TODO', idea: {id: 0, text: 'mr mike' } };
//     const expectation = [ action.idea ];
//
//     expect(todos(undefined, action)).toEqual(expectation);
//   });
//
//   it('should allow me to add state to a populated state array', () => {
//
//     const initialState = [ {id:0, text: 'mr mike'} ]
//     const todo         = {id:1, text: 'sir will'}
//     const action       = actions.addTodo(todo)
//     const expectation  = [ initialState[0], action.idea ]
//
//     expect(todos(initialState, action)).toEqual(expectation)
//   })
// })

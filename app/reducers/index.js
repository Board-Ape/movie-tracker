import { combineReducers } from 'redux';
import movies from './movies';
import moviesHasErrored from './moviesHasErrored';
import moviesIsLoading from './moviesIsLoading';
import user from './user';
import favorites from './favorites';



export default combineReducers({
  movies,
  moviesHasErrored,
  moviesIsLoading,
  user,
  favorites
});

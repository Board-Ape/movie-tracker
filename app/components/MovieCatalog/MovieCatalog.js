import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import { fetchMovieList, setUserToState, showFavorites } from '../../actions';
import PropTypes from 'prop-types';
const key = require('../../../utils/key');

class MovieCatalog extends Component {
  constructor() {
    super();
  }

  retrieveLocalStorage() {
    if (localStorage.getItem('user')) {
      this.props.handleSignInSuccess(JSON.parse(localStorage.getItem('user')));
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchMovieList(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`);
    // this.retrieveLocalStorage();
  }

  render() {
    const moviesToRender = this.props.shouldShowFavorites ? this.props.favorites : this.props.movies;
    console.log(this.props.shouldShowFavorites)
    const movieCardsArray = moviesToRender.map( (movie) => {
      return (<MovieCard key={movie.id} movie={ movie }/>);
    });
    console.log(movieCardsArray, 'movie cards')
    return (
      <div className='home-page'>
        <div className='movie-cards'>
          {movieCardsArray}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    favorites: state.favorites,
    hasErrored: state.moviesHasErrored,
    isLoading: state.moviesIsLoading,
    user: state.user,
    shouldShowFavorites: state.shouldShowFavorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: (url) => {
      dispatch(fetchMovieList(url));
    },
    handleSignInSuccess: (info) => {
      dispatch(setUserToState(info));
    },
    showFavorites: (bool) => {
      dispatch(showFavorites(bool));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);

MovieCard.propTypes = {
  props: PropTypes.object,
  handleSignInSuccess: PropTypes.func,
  fetchMovieList: PropTypes.func,
  shouldShowFavorites: PropTypes.bool,
  favorites: PropTypes.array,
  movies: PropTypes.array
};

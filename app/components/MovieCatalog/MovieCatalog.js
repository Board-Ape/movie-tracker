import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import Header from '../Header/Header';
import { fetchMovieList, setUserToState, shouldShowFavorites } from '../../actions';
const key = require('../../../utils/key');

class MovieCatalog extends Component {
  constructor() {
    super();
  }

  retrieveLocalStorage() {
    if (localStorage.getItem('user')) {
      this.props.handleSignInSuccess(JSON.parse(localStorage.getItem('user')))
    }
  }

  componentDidMount() {
    this.props.fetchMovieList(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
    // this.retrieveLocalStorage();
  }

  render() {
    // console.log('catalogFav: ', this.props.shouldShowFavorites)
    // console.log(this.props.favorites)
    const moviesToRender = this.props.shouldShowFavorites === true ? this.props.favorites : this.props.movies
    // const movieArray = moviesToRender;
    const movieCardsArray = moviesToRender.map( (movie) => {
      console.log(movie)
      return (<MovieCard key={movie.id} movie={ movie }/>)
    })
    return (
      <div className='home-page'>
        <div className='movie-cards'>
          {movieCardsArray}
        </div>
      </div>
    )
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: (url) => {
      dispatch(fetchMovieList(url))
    },
    handleSignInSuccess: (data) => {
      dispatch(setUserToState(data))
    },
    showFavorites: (bool) => {
      dispatch(showFavorites(bool))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);

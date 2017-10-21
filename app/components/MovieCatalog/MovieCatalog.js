import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import { fetchMovieList, setActiveUser } from '../../actions';
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
    this.retrieveLocalStorage();
  }

  render() {
    const movieArray = this.props.movies
    const movieCardsArray = movieArray.map( (movie) => {
      return (<MovieCard key={movie.id} movie={ movie }/>)
    })
    return (
      <div className='grid-catalog'>
        {movieCardsArray}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    hasErrored: state.moviesHasErrored,
    isLoading: state.moviesIsLoading,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: (url) => {
      dispatch(fetchMovieList(url))
    },
    handleSignInSuccess: (data) => {
      dispatch(setActiveUser(data))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);

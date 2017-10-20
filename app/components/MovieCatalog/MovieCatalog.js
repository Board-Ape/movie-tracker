import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import Modal from '../Modal/Modal';
import { fetchMovieList } from '../../actions';
const key = require('../../../utils/key');

class MovieCatalog extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchMovieList(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
  }

  render() {
    const movieArray = this.props.movies
    const movieCardsArray = movieArray.map( (movie) => {
      return (<MovieCard key={movie.id}
                         title={movie.title} />)
    })
    return (
      <div>
        Movie Catalog
        <Modal />
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
    fetchMovieList: (url) => dispatch(fetchMovieList(url)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);
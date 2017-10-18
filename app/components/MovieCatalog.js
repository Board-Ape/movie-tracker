import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { fetchMovieList } from '../actions';
const key = require('../../utils/key');

class MovieCatalog extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchMovieList(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
  }

  render() {

    return ( 

      <div>
      MOVIES
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    hasErrored: state.moviesHasErrored,
    isLoading: state.moviesIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: (url) => dispatch(fetchMovieList(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);

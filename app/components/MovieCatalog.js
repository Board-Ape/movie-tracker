import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import fetchMovieList from '../actions'

class MovieCatalog extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

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
        hasErrored: state.itemsHasErrored,
        isLoading: state.moviesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieList: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);

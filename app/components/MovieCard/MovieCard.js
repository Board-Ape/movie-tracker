import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite, AddFavorite, removeFavorite } from '../../actions';



const MovieCard = (props) => {
  const title = props.movie.title;
  const poster = props.movie.poster_path;
  

  const checkFavorite = (movie) => {
    if (movie.isFavorite === false) {
      props.AddFavorite(movie, props.user.id)
    } else {
      console.log(movie.id)
      props.removeFavorite(props.user.id, movie.movie_id)
    }
  }
  return (

    <div className='movie-card'>
      <button className='favoriteButtons'
          onClick={(e)=>{
            e.preventDefault()
            checkFavorite(props.movie)
            props.toggleFavorite(props.movie)
          }}
           >Add Favorite</button>

      <img className='movie-poster'
           src={`https://image.tmdb.org/t/p/w500${poster}`}

            />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (movie) => dispatch(toggleFavorite(movie)),
    AddFavorite: (movie, id) => dispatch(AddFavorite(movie, id)),
    removeFavorite: (userId, movieId) => dispatch(removeFavorite(userId, movieId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

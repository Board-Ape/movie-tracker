import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';



const MovieCard = (props) => {
  const title = props.movie.title;
  const poster = props.movie.poster_path;

  return (

    <div className='movie-card'>
      <h1>{props.title}</h1>
      <button 
          onClick={(e)=>{
            e.preventDefault()
            props.toggleFavorite(props.movie)
            
          } }
           >fav</button>
      <img className='movie-poster'
           src={`https://image.tmdb.org/t/p/w500${poster}`}

            />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (movie) => dispatch(toggleFavorite(movie)), 
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);

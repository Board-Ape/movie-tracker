import React from 'react';

const MovieCard = (props) => {
  return (
    <div className='movie-card'>
      <img className='movie-poster'
           src={`https://image.tmdb.org/t/p/w500${props.poster}`}

            />
    </div>
  )
}
export default MovieCard;

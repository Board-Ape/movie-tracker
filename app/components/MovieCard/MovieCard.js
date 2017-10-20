import React from 'react';

const MovieCard = (props) => {
  return (
    <div className='movie-card'>
      <h1>{props.title}</h1>
      <img className='movie-poster'
           src={`https://image.tmdb.org/t/p/w500${props.poster}`}

            />
    </div>
  )
}
export default MovieCard;

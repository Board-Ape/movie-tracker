
const movies = (state = [], action) => {
  switch (action.type) {
    case 'MOVIES_FETCH_DATA_SUCCESS':
      return action.movies;
    case 'UPDATE_OBJ':
      const oldState = [...state]
      console.log(oldState)
      let newState = oldState.map(movie=>{
        if (movie.movie_id === action.movie_id) {
          movie.id = action.favId
        }
        return movie
      })
      // movie_id,
      //   favId
      console.log(newState)
      console.log(action.movie_id)

     return state
    default:
      return state;
  }
}

export default movies;


const movies = (state = [], action) => {
  switch (action.type) {
    case 'MOVIES_FETCH_DATA_SUCCESS':
      console.log('moviesReducer!')        
        return action.movies.results;

        default:
          return state;
  }
}

export default movies;

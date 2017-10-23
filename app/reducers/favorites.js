const favorites = (state = [], action) => {
  switch (action.type) {
  case 'TOGGLE_FAVORITE': 
    // console.log('movies-favReducer-toggling-Fav: ', action.movie.title)
    const stateSet = new Set([...state]);
    action.movie.isFavorite = !action.movie.isFavorite;
    if (stateSet.has(action.movie)) {
      stateSet.delete(action.movie);
    } else {
      stateSet.add(action.movie);
    }
    const ArrayFromSet = [...stateSet];
    return ArrayFromSet;

  default: 
    return state;
  }
};

export default favorites;

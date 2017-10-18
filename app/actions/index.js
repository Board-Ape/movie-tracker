export function moviesHasErrored(bool) {
    return {
        type: 'MOVIES_HAS_ERRORED',
        hasErrored: bool
    };
}

export function moviesIsLoading(bool) {
    return {
        type: 'MOVIES_IS_LOADING',
        isLoading: bool
    };
}

export function moviesFetchDataSuccess(movies) {
    return {
        type: 'MOVIES_FETCH_DATA_SUCCESS',
        movies
    };
}

export default function fetchMovieList(url) {
  return (dispatch) => {
    dispatch(moviesIsLoading(true))
    fetch(url)
      .then((response) => {
        if (!reponse.ok) {
          throw Error(reponse.statusText)
        }
        dispatch(moviesIsLoading(false))
        return response;
      })
      .then((reponse) => response.json())
      .then(movies => dispatch(moviesFetchDataSuccess(movies)))
      .catch(() => dispatch(moviesHasErrored(true)))
  }
}

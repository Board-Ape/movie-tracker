export const moviesHasErrored = (bool) => {
  return {
    type: 'MOVIES_HAS_ERRORED',
    hasErrored: bool
  };
};

export const moviesIsLoading = (bool) => {
  return {
    type: 'MOVIES_IS_LOADING',
    isLoading: bool
  };
};

export const moviesFetchDataSuccess = (movies) => {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    movies
    };
};

export const fetchMovieList = (url) => {

  return (dispatch) => {
    dispatch(moviesIsLoading(true));
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          };
            dispatch(moviesIsLoading(false));
              return response;
            })
        .then((response) => response.json())
        .then((items) => dispatch(moviesFetchDataSuccess(items)))
        .catch(() => dispatch(moviesHasErrored(true)));
  };
};

export const fetchUserSigningIn = (email, password) => {
  return (dispatch) => {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(results => results.json())
    .then(res => (dispatch(setActiveUser(res.data))))
  }
};

export const setActiveUser = (user) => {
  return {
    type: 'SET_ACTIVE_USER',
    user
  }
}

export const AddUser = (name, password, email) => {
  console.log(name, password, email)
  return (dispatch) => {
    fetch('/api/users/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password,
        email
      })
    })
    .then(results => results.json())
    // .then(res => console.log(res))
    .then(res => (dispatch(setActiveUser({
        id: res.id,
        name,
        password,
        email
    }))))
  }
}


export const toggleFavorite = (movie) => {
  console.log('toggleAction', movie)
  return {
    type: 'TOGGLE_FAVORITE',
    movie
  }
}
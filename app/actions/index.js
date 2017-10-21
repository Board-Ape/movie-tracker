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
    .then(userData => (dispatch(fetchFavorites(userData.user.id))))
  }
};

export const setActiveUser = (user) => {
  return {
    type: 'SET_ACTIVE_USER',
    user
  }
}

export const AddUser = (name, password, email) => {
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
    .then(res => (dispatch(setActiveUser({
        id: res.id,
        name,
        password,
        email
    }))))
  }
}

export const fetchFavorites = (id) => {
  console.log(id)
  return (dispatch) => {
    fetch(`/api/users/${id}/favorites`)
    .then(response => response.json())
    .then( favResponse => {
        (favResponse.data.map(favorite=> {
        dispatch(toggleFavorite(favorite))
      }))
    })
    .then(res => console.log(res))
  }
}

export const AddFavorite = (movie, id) => {
  return (dispatch) => {
    fetch('/api/users/favorites/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: movie.id, user_id: id, title: movie.title, poster_path: movie.poster_path, release_date: movie.release_date, vote_average: movie.vote_average, overview: movie.overview })})
    .then(result => result.json())
    .then(response => console.log(response))
  }
}


export const toggleFavorite = (movie) => {  
  return {
    type: 'TOGGLE_FAVORITE',
    movie
  }
}
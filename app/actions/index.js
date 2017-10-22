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
        .then(resp => {
          const movies = resp.results
          const newMovies = movies.map(movie => {
            return Object.assign({ isFavorite: false, movie_id: movie.id }, movie)
          })      
          return newMovies
        })
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
    .then(res => (dispatch(setUserToState(res.data))))
    .then(userData => (dispatch(fetchFavorites(userData.user.id))))
    .catch(res => alert("You're email and password do not match our records, please sign up!"))
  }
};

export const setUserToState = (user) => {
  return {
    type: 'SET_USER_TO_STATE',
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
    .then(res => {
      if (!res.error) {
        (dispatch(setUserToState({
          id: res.id,
          name,
          password,
          email
        })))
      } else {
        alert("That Email as already been used.")
      }
    })
  }
}

export const fetchFavorites = (id) => {
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
    .then(response => dispatch(updateObj(movie.movie_id, response.id)))
  }
}

export const updateObj = (movie_id, favId) => {
    console.log('update: ', movie_id, favId)
  return {
    type: 'UPDATE_OBJ',
    movie_id,
    favId
  }
}

export const removeFavorite = (userId, movieId) => {
  console.log(userId, movieId)
  return (dispatch) => {
    fetch(`/api/users/${userId}/favorites/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ user_id: userId, movie_id: movieId})})
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

export const userSignOut = () => {
  return {
    type: 'USER_SIGNOUT'
  }
}

export const showFavorites = (bool) => {
  return {
    type: 'SHOW_FAVORITES',
    shouldShowFavorites: bool
  };
};

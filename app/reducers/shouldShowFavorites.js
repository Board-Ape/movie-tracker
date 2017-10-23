const shouldShowFavorites = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_FAVORITES':
      console.log(action)
      return action.shouldShowFavorites;
    default:
      return state;
  }
}

export default shouldShowFavorites;

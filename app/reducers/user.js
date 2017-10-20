const user = (state = {}, action) => {
  // console.log(action)
  switch (action.type) {
    case 'SET_ACTIVE_USER':
    console.log('reducer')
      return action.user;
    default:
      return state;
  }
}

export default user;

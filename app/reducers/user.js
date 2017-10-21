const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_TO_STATE':
    console.log('reducer')
    console.log(action)
      return action.user;
    case 'USER_SIGNOUT':
      return {};
    default:
      return state;
  }
}

export default user;

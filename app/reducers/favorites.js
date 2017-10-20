const favorites = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': 
      console.log('stateBefore: ', state)
      let stateSet = new Set([...state])
      if (stateSet.has(action.movie)) {
        stateSet.delete(action.movie)
      } else {
        stateSet.add(action.movie)
      }
      const ArrayFromSet = [...stateSet]
      console.log(ArrayFromSet)
      return ArrayFromSet

    default: 
      return state;
      
  }
}

export default favorites;
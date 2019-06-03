const initState = {
  sights: [],
}

export const sightReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_SIGHT_ERROR': return state;
    case 'ADD_SIGHT': return state;
    default: return state;
  }
};

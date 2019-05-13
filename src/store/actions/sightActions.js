export const addSight = (sight) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_SIGHT', sight })
  }
};

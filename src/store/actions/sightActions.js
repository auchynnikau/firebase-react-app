export const createSight = (sight) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATE_SIGHT', sight })
  }
}
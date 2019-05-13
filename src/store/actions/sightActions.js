export const addSight = (sight) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('sights').add({
      ...sight,
    }).then(() => {
      dispatch({ type: 'ADD_SIGHT', sight });
    }).catch((error) => {
      dispatch({ type: 'ADD_SIGHT_ERROR', error });
    })
  }
};

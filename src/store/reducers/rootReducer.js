import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { sightReducer } from './sightReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  sight: sightReducer,
  auth: authReducer,
});

import { authReducer } from './authReducer';
import { sightReducer } from './sightReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

export const rootReducer = combineReducers({
  auth: authReducer,
  sight: sightReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

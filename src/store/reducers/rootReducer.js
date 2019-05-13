import { authReducer } from './authReducer';
import { sightReducer } from './sightReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

export const rootReducer = combineReducers({
  auth: authReducer,
  sight: sightReducer,
  firestore: firestoreReducer,
});

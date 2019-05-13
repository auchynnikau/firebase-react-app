import { authReducer } from './authReducer';
import { sightReducer } from './sightReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  auth: authReducer,
  sight: sightReducer,
});

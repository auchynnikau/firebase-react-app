import { authReducer } from './authReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  auth: authReducer,
});

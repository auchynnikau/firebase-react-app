const initState = {
  authError: null,
}

export const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.error.message,
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.error.message,
      }
    case 'SIGNOUT_SUCCESS':
      return state;
    default: return state;
  }
}

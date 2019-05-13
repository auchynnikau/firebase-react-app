const initState = {
  authError: null,
}

export const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login fail',
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
      }
    case 'SIGNOUT_SUCCESS':
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('eee')
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.error.message,
      }
    default:
      return state;
  }
}

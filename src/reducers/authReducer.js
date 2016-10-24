import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from '../actionTypes';

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        statusText: null
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.payload.token,
        statusText: 'You are now logged in.'
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: `Authentication Error: ${action.payload.status} ${action.payload.statusText}`
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: 'You are now logged out.'
      };
    default:
      return state
  }
};

export default reducer;

import * as types from './actionTypes';

const { CHAPTER_GET_REQUEST, CHAPTER_GET_FAILURE, CHAPTER_GET_SUCCESS } = types

const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case CHAPTER_GET_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        statusText: null
      };
    case CHAPTER_GET_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: payload.token,
        currentUser: payload.user,
        statusText: 'You are now logged in.'
      };
    case CHAPTER_GET_FAILURE:
      const { status, statusText } = payload.error.response
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        currentUser: {},
        statusText: `Authentication Error: ${status} ${statusText}`
      };
    default:
      return state
  }
};

export default reducer;

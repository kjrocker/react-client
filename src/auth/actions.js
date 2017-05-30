import * as types from './actionTypes';
import { push } from 'react-router-redux';

import { genericAJAX, formRequest, addRedirect } from '../helpers/asyncActions'

function registerUser(form_obj) {
  const request = formRequest(form_obj)
  return genericAJAX('/users', request, {
    start: loginUserRequest,
    succeed: addRedirect(loginUserSuccess, '/'),
    fail: loginUserFailure
  })
}

function loginUser(form_obj, redirect = '/') {
  const request = formRequest(form_obj)
  return genericAJAX('/user_token', request, {
    start: loginUserRequest,
    succeed: addRedirect(loginUserSuccess, redirect),
    fail: loginUserFailure
  })
}

function logoutAndRedirect() {
  return (dispatch, state) => {
    dispatch(logoutUser());
    dispatch(push('/login'));
  }
}

function loginUserSuccess({ user, jwt }) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      user: user,
      token: jwt
    }
  }
}

function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: types.LOGIN_USER_FAILURE,
    payload: { error }
  }
}

function loginUserRequest() {
  return {
    type: types.LOGIN_USER_REQUEST
  }
}

function logoutUser() {
  localStorage.removeItem('token');
  return {
    type: types.LOGOUT_USER
  }
}

export {
  registerUser,
  loginUser,
  logoutAndRedirect,
  loginUserSuccess,
  loginUserFailure,
  loginUserRequest,
  logoutUser
}

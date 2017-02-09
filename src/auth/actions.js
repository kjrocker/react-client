// import jwtDecode from 'jwt-decode';
import * as types from '../actionTypes';
import { push } from 'react-router-redux';

import { genericAJAX, formRequest, addRedirect } from '../helpers/async_actions'

export function registerUser(form_obj) {
  const request = formRequest(form_obj)
  return genericAJAX('/users', request, {
    start: loginUserRequest,
    succeed: addRedirect(loginUserSuccess, '/'),
    fail: loginUserFailure
  })
}

export function loginUser(form_obj, redirect = '/') {
  const request = formRequest(form_obj)
  return genericAJAX('/user_token', request, {
    start: loginUserRequest,
    succeed: addRedirect(loginUserSuccess, redirect),
    fail: loginUserFailure
  })
}

export function logoutAndRedirect() {
  return (dispatch, state) => {
    dispatch(logoutUser());
    dispatch(push('/login'));
  }
}

export function loginUserSuccess({ user, jwt }) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      user: user,
      token: jwt
    }
  }
}

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: types.LOGIN_USER_FAILURE,
    payload: { error }
  }
}

export function loginUserRequest() {
  return {
    type: types.LOGIN_USER_REQUEST
  }
}

export function logoutUser() {
  localStorage.removeItem('token');
  return {
    type: types.LOGOUT_USER
  }
}

export function receiveProtectedData(data) {
  return {
    type: types.RECEIVE_PROTECTED_DATA,
    payload: {
      data: data
    }
  }
}

export function fetchProtectedDataRequest() {
  return {
    type: types.FETCH_PROTECTED_DATA_REQUEST
  }
}

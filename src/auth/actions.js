import * as types from './actionTypes';

import { genericAJAX, postFormRequest, addRedirect } from '../helpers/asyncActions'

function registerUser(form_obj) {
  const request = postFormRequest(form_obj)
  return genericAJAX('/users', request, {
    request: loginUserRequest,
    succeed: addRedirect(loginUserSuccess, '/'),
    failure: loginUserFailure
  })
}

function loginUser(form_obj, redirect = '/') {
  const request = postFormRequest(form_obj)
  return genericAJAX('/user_token', request, {
    request: loginUserRequest,
    succeed: addRedirect(loginUserSuccess, redirect),
    failure: loginUserFailure
  })
}



function loginUserSuccess({ user, jwt }) {
  localStorage.setItem('token', jwt)
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

const logoutAndRedirect = addRedirect(logoutUser, '/login');

export {
  registerUser,
  loginUser,
  logoutAndRedirect,
  loginUserSuccess,
  loginUserFailure,
  loginUserRequest,
  logoutUser
}

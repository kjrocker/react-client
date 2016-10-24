import jwtDecode from 'jwt-decode';
import * as types from '../actionTypes';
import { push } from 'react-router-redux'

// Helper Function(s)

function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

// Thunk Actions

export function registerUser(form_obj, redirect='/') {
  return function(dispatch) {
    dispatch(loginUserRequest());
    return fetch('/api/users', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(form_obj)
      })
      .then(checkHttpStatus)
      .then(r => r.json())
      .then(response => {
        try {
          let decoded = jwtDecode(response.jwt);
          dispatch(loginUserSuccess(response.jwt));
          dispatch(push(redirect))
        }
        catch (e) {
          dispatch(loginUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token'
            }
          }));
        }
      })
      .catch(error => {
        dispatch(loginUserFailure(error));
      })
  }
}

export function loginUser(form_obj, redirect="/") {
  return function(dispatch) {
    dispatch(loginUserRequest());
    return fetch('/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(form_obj)
      })
      .then(checkHttpStatus)
      .then(r => r.json())
      .then(response => {
        try {
          let decoded = jwtDecode(response.jwt);
          dispatch(loginUserSuccess(response.jwt));
          dispatch(push(redirect))
        }
        catch (e) {
          dispatch(loginUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token'
            }
          }));
        }
      })
      .catch(error => {
        dispatch(loginUserFailure(error));
      })
  }
}

export function fetchProtectedData(token, endpoint) {
  return (dispatch, state) => {
    dispatch(fetchProtectedDataRequest());
    return fetch(endpoint, {
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(checkHttpStatus)
    .then(r => r.json())
    .then(response => {
      dispatch(receiveProtectedData(response.data));
    })
    .catch(error => {
      if(error.response.status === 401) {
        dispatch(loginUserFailure(error));
        dispatch(push('/login'));
      }
    })
  }
}

export function logoutAndRedirect() {
  return (dispatch, state) => {
    dispatch(logoutUser());
    dispatch(push('/login'));
  }
}

// Basic Actions

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: types.LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
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

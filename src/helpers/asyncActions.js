import { push } from 'react-router-redux';

function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function formRequest(form, token) {
  return {
    method: 'post',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(form)
  }
}

function addRedirect(action, redirect) {
  return function(response) {
    return function(dispatch) {
      dispatch(action(response))
      dispatch(push(redirect))
    }
  }
}

function genericAJAX(endpoint, request, { start, succeed, fail }) {
  return function(dispatch) {
    dispatch(start(request))
    return fetch(endpoint, request)
      .then(checkHttpStatus)
      .then(r => r.json())
      .then(r => dispatch(succeed(r)))
      .catch(e => dispatch(fail(e)))
  }
}

export {
  genericAJAX,
  formRequest,
  addRedirect
};

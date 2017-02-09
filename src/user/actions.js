export function updateUser(form_obj) {
  const request = formRequest(form_obj)
  return genericAJAX(`/user/${form_obj.id}`)
}

export function registerUser(form_obj) {
  const request = formRequest(form_obj)
  return genericAJAX('/users', request, {
    start: loginUserRequest,
    succeed: addRedirect(loginUserSuccess, '/'),
    fail: loginUserFailure
  })
}

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { registerUser } from './actions'

// The Registration Form Itself
// Takes the action/function that gets passed
// to handleSubmit, connects to reduxForm.

class RegisterForm extends Component {
  register = (values) => {
    this.props.actions.registerUser(values)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.register)}>
        <div>
          <label htmlFor="user[email]">Email</label>
          <Field name="user[email]" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="user[password]">Password</label>
          <Field name="user[password]" component="input" type="password"/>
        </div>
        <div>
          <label htmlFor="user[password_confirmation]">Confirmation</label>
          <Field name="user[password_confirmation]" component="input" type="password"/>
        </div>
        <button type="submit">Register</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ registerUser }, dispatch)
})

const registerForm = connect(null, mapDispatchToProps)(RegisterForm)

export default reduxForm({form: 'register' })(registerForm);

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

// The Registration Form Itself
// Takes the action/function that gets passed
// to handleSubmit, connects to reduxForm.

class RegisterForm extends Component {
  onSubmit = () => {
    this.props.handleSubmit(this.props.submitAction)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit()}>
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

export default reduxForm({form: 'register' })(RegisterForm);

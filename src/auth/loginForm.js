import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loginUser } from './actions';

import StatusBar from './statusBar'

class LoginForm extends Component {
  login = (values) => {
    const redirectRoute = this.props.location.query.next || '/login'
    this.props.actions.loginUser(values, redirectRoute)
  }

  render(){
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.login)}>
        <div>
          <label htmlFor="auth[email]">Email</label>
          <Field name="auth[email]" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="auth[password]">Password</label>
          <Field name="auth[password]" component="input" type="password"/>
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loginUser }, dispatch)
})

const loginForm = connect(null, mapDispatchToProps)(LoginForm)

export default reduxForm({ form: 'login' })(loginForm)

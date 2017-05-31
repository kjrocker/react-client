import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { registerUser } from './actions'

import StatusBar from './statusBar'

class RegisterForm extends Component {
  render() {
    const { handleSubmit, statusText, isAuthenticated } = this.props;
    if ( isAuthenticated ) {
      return (
        <div>
          <StatusBar text={statusText}/>
          <p>You're already logged in!</p>
        </div>
      )
    }
    return (
      <div>
        <StatusBar text={statusText}/>
        <form onSubmit={handleSubmit(this.props.actions.registerUser)}>
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
        <div>
          Already have an account? You can <Link to='/login'>login</Link> here.
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ registerUser }, dispatch)
})

const mapStateToProps = (state) => ({
  isAuthenticating: state.auth.isAuthenticating,
  isAuthenticated: state.auth.isAuthenticated,
  statusText: state.auth.statusText
})

const registerForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default connect(mapStateToProps, mapDispatchToProps)(registerForm);

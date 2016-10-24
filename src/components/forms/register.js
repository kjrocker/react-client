import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-redux';

import { registerUser } from '../../actions/auth'

class RegisterForm extends Component {
  register = (values) => {
    this.props.actions.registerUser(values)
  }

  render(){
    const { handleSubmit, statusText, isAuthenticated } = this.props;
    const statusBar = statusText ? <div className='alert alert-info'>{statusText}</div> : ''
    if ( isAuthenticated ) {
      return (
        <div>
          { statusBar }
          <p>You're already logged in!</p>
        </div>
      )
    }
    return (
      <div>
        { statusBar }
        <form onSubmit={handleSubmit(this.register)}>
          <div>
            <label htmlFor="user[username]">Username</label>
            <Field name="user[username]" component="input" type="text"/>
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

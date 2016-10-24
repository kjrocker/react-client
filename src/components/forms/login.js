import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loginUser } from '../../actions/auth';

class LoginForm extends Component {
  login = (values) => {
    const redirectRoute = this.props.location.query.next || '/login';
    this.props.actions.loginUser(values, redirectRoute)
  }

  render(){
    const { handleSubmit, statusText, isAuthenticated } = this.props;
    // Don't render the form if already authenticated
    if ( isAuthenticated ) {
      return (
        <div>
          {this.props.statusText ? <div className='alert alert-info'>{statusText}</div> : ''}
          <p>You're already logged in!</p>
        </div>
      )
    }
    // Render the form
    return (
      <div>
        {statusText ? <div className='alert alert-info'>{statusText}</div> : ''}
        <form onSubmit={handleSubmit(this.login)}>
          <div>
            <label htmlFor="auth[username]">Username</label>
            <Field name="auth[username]" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="auth[password]">Password</label>
            <Field name="auth[password]" component="input" type="password"/>
          </div>
          <button type="submit">Login</button>
        </form>
        <div>
          Don't have an account? You can <Link to='/register'>register</Link> here.
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loginUser }, dispatch)
})

const mapStateToProps = (state) => ({
  isAuthenticating: state.auth.isAuthenticating,
  isAuthenticated: state.auth.isAuthenticated,
  statusText: state.auth.statusText
})

const loginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);

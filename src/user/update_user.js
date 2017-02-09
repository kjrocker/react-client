import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updateUser } from './actions';
import { statusBar } from '../helpers/components'

class LoginForm extends Component {

  update = (values) => {
    this.props.actions.updateUser(values)
  }

  render(){
    const { handleSubmit, statusText, isAuthenticated } = this.props;
    // Don't render the form if already authenticated
    if ( isAuthenticated ) {
      return (
        <div>
          <StatusBar text={statusText}/>
          <p>You're already logged in!</p>
        </div>
      )
    }
    // Render the form
    return (
      <div>
        <StatusBar text={statusText}/>
        <form onSubmit={handleSubmit(this.update)}>
          <Field name="id" component="hidden" value={user.id}
          <div>
            <label htmlFor="user[username]">Username</label>
            <Field name="user[username]" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="user[password]">Password</label>
            <Field name="user[password]" component="input" type="password"/>
          </div>
          <button type="submit">Update</button>
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

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { registerUser } from './actions'

import StatusBar from './statusBar'
import LoggedInMessage from './loggedInMessage'
import RegisterForm from './registerForm'

// Wrapper around the Registration Form
// Displays a message if already logged in,
// connects to some redux.auth state items.

class RegisterWrapper extends Component {
  render() {
    const { statusText, isAuthenticated } = this.props;

    const ChildComponent = isAuthenticated ? <LoggedInMessage/> : (
      <div>
        <RegisterForm submitAction={this.props.actions.registerUser}/>
        <p>Already have an account? <Link to='/login'>Login</Link> here.</p>
      </div>
    )

    return (
      <div>
        <StatusBar text={statusText}/>
        { ChildComponent }
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper);

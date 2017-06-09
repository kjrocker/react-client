import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import LoggedInMessage from './loggedInMessage'
import LoginForm from './loginForm'
import StatusBar from './statusBar'

class LoginWrapper extends Component {
  render() {
    const { statusText, isAuthenticated } = this.props
    const ChildComponent = isAuthenticated ? <LoggedInMessage/> : (
      <div>
        <LoginForm location={this.props.location}/>
        <p>Don't have an account? <Link to='/register'>Register</Link> here.</p>
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

const mapStateToProps = (state) => ({
  isAuthenticating: state.auth.isAuthenticating,
  isAuthenticated: state.auth.isAuthenticated,
  statusText: state.auth.statusText
})

export default connect(mapStateToProps, null)(LoginWrapper)

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount(){
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps){
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth(isAuthenticated){
      if (!isAuthenticated){
        const redirectAfterLogin = this.props.location.pathname
        this.props.dispatch(push(`/login?next=${redirectAfterLogin}`))
      }
    }

    render() {
      return (
        <div>
          { this.props.isAuthenticated ? <Component {...this.props}/> : null }
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}

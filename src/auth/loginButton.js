import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logoutUser } from './actions';

// Render either Login or Logout, with appropriate actions
class LoginControl extends Component {
  render(){
    const { isAuthenticated, actions } = this.props;
    return (
      <div>
        {
          isAuthenticated
          ? <a onClick={() => actions.logoutUser()}>Logout</a>
          : <Link to='/login'>Login</Link>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logoutUser }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginControl);

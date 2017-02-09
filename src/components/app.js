import React, { Component } from 'react';
import { Link } from 'react-router';

import LoginControl from '../auth/login_button'

class App extends Component {
  render() {
    return (
      <div>
        <h3>Every page!</h3>
        <LoginControl/>
        <div>
          {this.props.children}
        </div>
        <Link to='/protected'>Protected Element</Link>
      </div>
    );
  }
}

export default App;

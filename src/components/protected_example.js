import React, { Component } from 'react';

class ProtectedExample extends Component {
  render() {
    const msg = 'You must be logged in to see this!'
    return (
      <div>
        { msg }
      </div>
    );
  }
}

export default ProtectedExample;

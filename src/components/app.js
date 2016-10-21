import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Rendered on Every Page</h2>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

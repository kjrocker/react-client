import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Button } from 'semantic-ui-react'

import { LoginButton } from '../auth'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' }
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu>
          <Menu.Menu position='right'>
            <Menu.Item active={activeItem === 'login/logout'}>
              <Button as={LoginButton}/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div>
          {this.props.children}
        </div>
        <Link to='/protected'>Protected Element</Link>
      </div>
    );
  }
}

export default App;

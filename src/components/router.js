import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

const testComponent = () => (<h1>Hiya!</h1>)

class MyRouter extends Component {
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={testComponent}/>
      </Router>
    )
  }
}

export default MyRouter;

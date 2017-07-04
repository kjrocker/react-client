import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './app'
import ProtectedComponent from './protectedExample'
import { LoginWrapper, RegisterWrapper } from '../auth';
import { StoryPage } from '../chapters'

const SimpleComponent = (props) => (<div> { props.children } </div>)

const MyRouter = ({ history }) => (
  <Router history={history}>
    <Route path='/' component={App}>
      <Route path='protected' component={ProtectedComponent}/>
      <Route path='login' component={LoginWrapper}/>
      <Route path='register' component={RegisterWrapper}/>
      <Route path='stories/:id(/:number)' component={StoryPage}/>
    </Route>
  </Router>
);

export default MyRouter;

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './app'
import ProtectedComponent from './protectedExample'
import { LoginWrapper, RegisterWrapper } from '../auth';
import { StoryPage, StoryList } from '../chapters'

const SimpleComponent = (props) => (<div> { props.children } </div>)

const MyRouter = ({ history }) => (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={StoryList}/>
      <Route path='login' component={LoginWrapper}/>
      <Route path='register' component={RegisterWrapper}/>
      <Route path='stories/:id(/:number)' component={StoryPage}/>
    </Route>
  </Router>
);

export default MyRouter;

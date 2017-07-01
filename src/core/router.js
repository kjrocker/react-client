import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './app'
import ProtectedComponent from './protectedExample'
import { LoginWrapper, RegisterWrapper } from '../auth';
import { ChapterWrapper, ChapterShow } from '../chapters'

const SimpleComponent = (props) => (<div> { props.children } </div>)

const MyRouter = ({ history }) => (
  <Router history={history}>
    <Route path='/' component={App}>
      <Route path='protected' component={ProtectedComponent}/>
      <Route path='login' component={LoginWrapper}/>
      <Route path='register' component={RegisterWrapper}/>
      <Route path='stories/:id'>
        <IndexRoute component={ChapterShow}/>
        <Route path=":number" component={ChapterShow}/>
      </Route>
    </Route>
  </Router>
);

export default MyRouter;

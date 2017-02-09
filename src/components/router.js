import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './app'
import LoginForm from '../auth/login_form'
import RegisterForm from '../user/register'
import ProtectedComponent from './protected_example'
import requireAuthentication from '../auth/require_authentication'

const SimpleComponent = (props) => (<div> I'm a dummy component! </div>)

const MyRouter = ({ history }) => (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={SimpleComponent}/>
      <Route path='protected' component={requireAuthentication(ProtectedComponent)}/>
      <Route path='login' component={LoginForm}/>
      <Route path='register' component={RegisterForm}/>
    </Route>
  </Router>
);

export default MyRouter;

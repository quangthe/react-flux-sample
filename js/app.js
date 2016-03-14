'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';
import LoginPage from './components/LoginPage';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.querySelector('#react'));

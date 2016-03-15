'use strict';

import App from './components/App';
import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';
import LoginPage from './components/LoginPage';
var {render} = ReactDOM;
var {Router, Route, Link, IndexRoute, browserHistory} = ReactRouter;

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.querySelector('#react'));

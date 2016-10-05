// Importing required packages

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
require('./index.css');
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


// Importing components
import {Nav} from './nav';
import {Home} from './homepage';
import HomePage from './home'
import {Sidebar} from './sidebar.jsx'
import {MenuItem} from './menuitem'
import About from './about'
import NotFound from './notfound'

var App = React.createClass({
  render: function() {
    return (
      <div>
          <Nav />
          {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={About} />
      <Route path="menu" component={Sidebar} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);

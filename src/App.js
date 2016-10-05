import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./index.css');
import $ from 'jquery'; 
import data from './data';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Gallery from './Gallery'
import HomePage from './home'
import Nav from './Nav'


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





var NotFound = React.createClass({
  render: function() {
    return (
      <div>
        <h1>404</h1>
      </div>
    )
  }
})



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={Gallery} />
      <Route path="menu" component={Gallery} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./gallery.css');
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import {Details} from './detailmodal.jsx'


var MenuItem = React.createClass({
    render: function() {
    return (
      <div className="m">
        <div className="l">
          <br/>
          <br/>
          <li><img src={require(this.props.info.img)}/></li>
          <li><h4>{this.props.info.title}</h4></li>
          <li><h5>{this.props.info.price}</h5></li>
        </div>
      </div>
    )
  }
})

export default MenuItem;

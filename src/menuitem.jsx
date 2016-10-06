import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./index.css');
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';


var MenuItem = React.createClass({
    render: function() {
    return (
      <div className="m">
        <div className="l">
        <li><h4>{this.props.info.title}</h4></li><br/>
          <li><img src={require(this.props.info.img)}/></li>
          <p className="description">{this.props.info.description}</p>
          <li>{this.props.info.price}</li>
        </div>  
      </div>
    )
  }
})

export default MenuItem;
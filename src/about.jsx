import React from 'react';
require('./index.css');
import data from './data';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

var About = React.createClass({
  getInitialState(){
    return({about:null})
  },
  componentWillMount(){
    this.setState({about:data.getAbout()})
  },
  render: function() {
    return (
      <div >
        <h1 className="modal-header">About Luis</h1>
        <p className="vertical-container">{this.state.about.restaurant_name}</p>
        <p>{this.state.about.restaurant_slogan}</p>
        <p>{this.state.about.restaurant_slogan1}</p>  
        <h2 className="vertical-container">Contact</h2>
        <p className="main">{this.state.about.restaurant_address}</p>
        <p>{this.state.about.restaurant_email}</p> 
        <p>{this.state.about.restaurant_phone}</p>
      </div>
    )
  }
})

export {About};
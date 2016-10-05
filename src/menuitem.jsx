import React from 'react';
require('./index.css');


var MenuItem = React.createClass({
    render: function() {
    return (
      <div className="m">
        <div className="l">
        <li><h4>{this.props.name}</h4></li><br/>
          <li><img src={require(this.props.image)}/></li>
          <p className="description">{this.props.description}</p>
          <li>{this.props.price}</li>
        </div>
        
      </div>
    )
  }
})

export {MenuItem};
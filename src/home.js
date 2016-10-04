import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, hashHistory} from 'react-router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css';

var HomePage = React.createClass({
  render: function(){
    return(
      <div>
        <Carousel />
      </div>
    )
  }
})




var Carousel = React.createClass({
  render: function(){
    return(

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/*} Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="img_chania.jpg" alt="Chania"/>
          </div>

          <div className="item">
            <img src="img_chania2.jpg" alt="Chania"/>
          </div>

          <div className="item">
            <img src="img_flower.jpg" alt="Flower"/>
          </div>

        </div>

        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    )
  }
})


export default Logo;

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
require('./index.css');


var Home = React.createClass({
  render: function(){
    return(
      <div>
        <Carousel />
        <PageInfo />
      </div>
    )
  }
})

var Carousel = React.createClass({
  render: function(){
    return(
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
          <img src="http://i63.tinypic.com/2mngp3t.jpg" alt="museum" height="500" width="1107" />
          </div>
          <div className="carousel-item">
            <img src="http://i66.tinypic.com/ol00nr.jpg" alt="art" height="500" width="1107"  />
          </div>
          <div className="carousel-item">
            <img src="http://i67.tinypic.com/6fwks8.jpg" alt="gallery" height="500" width="1107" />
          </div>
        </div>
        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="icon-prev" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="icon-next" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
})
//This is the information under the image slider on the introductory page.
//It holds information like museum hours, pricing etc.
var PageInfo = React.createClass({
  render: function(){
    return(
      <div>
        <div class="container">
            <div class="row">
              <div class=".col-{400}">
                <h4>News</h4>
                <p>Explore "AAA's" Unicorn Art</p>
              </div>

              <div class="col-xs">
                <h4>Our Sponsors:</h4>
                <img src="http://2.bp.blogspot.com/-RMrynVlRuZc/TqI2cG9BWnI/AAAAAAAAAvM/TV-wIxpEOY8/s1600/ECF.png" height="100" width="150" />
              </div>
            </div>

            <div class="row">
              <div class="col-xs">
                <h4>Membership</h4>
                <p>Special Rates & Benefits for Artists</p>
              </div>
              <div class="col-xs">
                <h4>Don&apos;t Miss:</h4>
                <p>See Fisherman&apos;s Cry Artist Cortku</p>
              </div>
              <div class="col-xs">
                <h4>Program Calendar</h4>
                <h5>October 18</h5>
                <h5>Dragon Art Fair</h5>
                <p>See the eeriest of eerie here</p>
                <h6>7:00 pm</h6>
              </div>
            </div>
        </div>
      </div>  
    )
  }
})

export default Home;

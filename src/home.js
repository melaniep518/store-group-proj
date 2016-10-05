import React from 'react';
import ReactDOM from 'react-dom';import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';



var HomePage = React.createClass({
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
      <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
          </div>


          <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src={require("./images1/slidepic1.jpg")} alt="museum photo" />
              </div>

              <div className="item">
                <img src={require("./images1/slidepic2.jpg")} alt="walrus and unicorn art" />
              </div>

              <div className="item active">
                <img src={require("./images1/slidepic3.jpg")} alt="art gallery view" />
              </div>
          </div>


          <div>
              <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
          </div>

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
        <div class="row">
            <div class="col-md-8">
              <h4>News</h4>
              <p>Explore "AAA's" Unicorn Art</p>
            </div>

            <div class="col-md-4">
              <h4>Our Sponsors:</h4>
              <img src="http://http://2.bp.blogspot.com/-RMrynVlRuZc/TqI2cG9BWnI/AAAAAAAAAvM/TV-wIxpEOY8/s1600/ECF.png" />,
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
              <h4>Membership</h4>
              <p>Special Rates & Benefits for Artists</p>
            </div>

            <div class="col-md-4">
              <h4>Don&apos;t Miss:</h4>
              <p>See Fisherman&apos;s Cry Artist Cortku</p>
            </div>

            <div class="col-md-4">
              <h4>Program Calendar</h4>
              <h5>October 18</h5>
              <h5>Dragon Art Fair</h5>
              <p>See the eeriest of eerie here</p>
              <h6>7:00 pm</h6>
            </div>
         </div>
    </div>
    )
  }
})

export default HomePage;

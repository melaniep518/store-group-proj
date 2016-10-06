import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Slider from 'react-slick';
require ('./home.css')
import 'bootstrap/dist/css/bootstrap.css';



var Home = React.createClass({
  render: function(){
    return(
      <div>
        <SimpleSlider />
        <PageInfo />
      </div>
    )
  }
})


var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500
    };
    return (
      <Slider {...settings}>
        <div><img src="http://i63.tinypic.com/2mngp3t.jpg" alt="museum" height="500" width="1107" /></div>
        <div><img src="http://i66.tinypic.com/ol00nr.jpg" alt="art" height="500" width="1107"  /></div>
        <div><img src="http://i67.tinypic.com/6fwks8.jpg" alt="gallery" height="500" width="1107" /></div>
      </Slider>
    )
  }
});

//This is the information under the image slider on the introductory page.
//It holds information like museum hours, pricing etc.
var PageInfo = React.createClass({
  render: function() {
    return (
      <div className="bottom-boxes">
          <div className="info-box" width="100">
              <div className="info">
                <h6 font="bold">NEWS</h6>
                <h5>Explore AAA's Unicorn Art</h5>
              </div>


              <div className="info dont-miss">
                <h6>DON'T MISS</h6>
                <h5>See Fisherman's Cry By: Artist Cortku</h5>
              </div>
          </div>

          <div className="info-page" width="100">
              <div className="info">
                <h6>OUR SPONSORS</h6>
                <img src="http://www.ecf.net/site/wp-content/themes/ecf/img/exceptional-childrens-foundation.png" height="75" width="125" />
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5lHFHfe-mShN7mQmtriJ5ivmnOk9nrNTfUOwiMsRXUWkdl4kj" height="75" width="125" />
              </div>

              <div className="info">
                <h6>TODAY'S HOURS</h6>
                <h5>10:00 a.m - 6:00 p.m.</h5>
              </div>

              <div className="info">
                <h6>PROGRAM CALENDAR</h6>
                <h6>10/18</h6>
                <h5>Dragon Art Fair</h5>
                <h6>See the Eeriest of Eerie Art here</h6>
                <h5>7:00 p.m.</h5>
              </div>
          </div>
        </div>





      )
    }
});

export default Home;

import React from 'react';
import data from './data';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';


var Home = React.createClass({
    getInitialState(){
      return ({images:null})
  },
  componentWillMount(){
    // this.setState({images:data.getImages()})
    // console.log('images', data.getImages())
  },
  render: function() {
    
    return (
      <div>
      {/*BOOTSTRAP BOTTONS
        <h1>Welcome To Our Gallery Website</h1>
        <h4>BROWSE AROUND TO SEE WHAT WE HAVE IN STORE FOR YOU.</h4>

         
        <button className="">Luis</button>
        <button>
          <span className='glyphicon glyphicon-thumbs-up'></span>
        </button>
        <button type="button" className="btn btn-success" className="tu">Success</button>
        */} 




          {/* BOOTSTRAP TABLE FOR ALL ITEMS*/} 
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg" alt="..."/>
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg" alt="..."/>
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg" alt="..."/>
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
})

export {Home}
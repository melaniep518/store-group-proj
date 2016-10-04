import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./index.css');
import $ from 'jquery'; 
import data from './data';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

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

var Nav = React.createClass({
  render: function() {
    return (
      <div>

     { /*FIRST NAV*/}
    <nav className="navbar main">
        <div className="logo">
          <a href="#">
           <img alt="Brand" src="http://adelantealliance.org/wp-content/uploads/2016/10/logo.jpeg"/>
          </a>
        </div>
    
        <div className="input-group">
          <input type="text" className="form-control search" placeholder=" Quick Search"/>
            <button className="btn btn-default go" type="button">Go!</button>
        </div>


        {/*ADDING SOCIAL MEDIA*/}
         <div className="social">
            <a className="media twitter" href="#">
              <img src="http://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"/>
            </a>

            <a className="media facebook" href="#">
              <img src="https://cdn0.iconfinder.com/data/icons/yooicons_set01_socialbookmarks/256/social_facebook_box_blue.png"/>
            </a>

            <a className="media instagram" href="#">
              <img src="https://anneauweiler.files.wordpress.com/2014/04/icon-instagram.png"/>
            </a>
          </div>
    </nav>

{ /*SECOND NAV*/}
<nav className="navbar navbar-default">
  <div className="container-fluid">
    { /* Brand and toggle get grouped for better mobile display*/}
    <div className="navbar-header">


       {/*TOGGLE BOTTON SHRINKS*/}
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">
        <Link to="/">Home</Link>
      </a>
    </div>

    { /*Collect the nav links, forms, and other content for toggling */}
    <div className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <li className="linetext"><a href="#"><Link to="/">Cat</Link><span className="sr-only">(current)</span></a></li>
        <li className="linetext"><a href="#"><Link to="menu">Dragon</Link></a></li>
        <li className="linetext"><a href="#"><Link to="about">Giraffe</Link></a></li>
        <li className="linetext"><a href="#"><Link to="menu">Unicorn</Link></a></li>
        <li className="linetext"><a href="#"><Link to="about">Walrus</Link></a></li>


        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Search by category <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#"><Link to="about">Funny</Link></a></li>
            <li><a href="#"><Link to="about">Eerie</Link></a></li>
            <li><a href="#"><Link to="about">Weird</Link></a></li>
          </ul>
        </li>
      </ul>
      


       {/*RIGHT NAV*/}
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Login</a></li>
          
          {/*CART*/}
        <li><a href="#" className="glyphicon glyphicon-shopping-cart"><Link to="menu">Cart</Link></a></li>


  
       
      </ul>
    </div>{ /*/.navbar-collapse */}
  </div>{ /*/.container-fluid */}
</nav>
{ /*here*/}


      {/*
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="menu">Menu</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      */}
        
      </div>
    )
  }
})

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

var Menu = React.createClass({
	getInitialState(){
		return ({menu:null,images: null})
	},
	componentWillMount(){
		this.setState({menu: data.getMenu()})
    this.setState({images:data.getImages()})
	},
  	render: function() {
  	var arr= [];
 //loops through data   
   	for(var product in this.state.menu){
   		arr.push()
  		for(var i=0; i< this.state.menu[product].length;i++){
  			arr.push(<MenuItem title= {product} name= {this.state.menu[product][i].name} price={this.state.menu[product][i].price} image={this.state.images[i]} description={this.state.menu[product][i].description} />)
        console.log(this.state.images[i])
  		}
  	}
    return (
      <div className="gallery">

       {/* <h1>Welcome To Our Gallery Website</h1>
        <h4>BROWSE AROUND TO SEE WHAT WE HAVE IN STORE FOR YOU.</h4>


         *BOTTONS
        <button>
          <span className='glyphicon glyphicon-thumbs-up'></span>
        </button>
        <button type="button" className="btn btn-success">Success</button>
       */}
          {/*SIDEBAR*/}  
        <table className ="table-bordered">
          <thead>
            <tr>
              <th>Deparments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category</td>
            </tr>
            <tr>
              <td>Eerie</td>
            </tr>
            <tr>
              <td>Funny</td> 
            </tr>
             <tr>
              <td>Eerie</td>
            </tr>
            <tr>
              <td>Funny</td> 
            </tr>
             <tr>
              <td>Eerie</td>
            </tr>
            <tr>
              <td>Funny</td> 
            </tr>
          </tbody>
        </table>



         {/*PRINTS ALL GALLERY*/}  
          <div className="pictsConteiner">
           {arr}
          </div>
      </div>
  		  

      
    )
  }
})

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

var MenuItem = React.createClass({
	getInitialState(){
		return ({product: null})
	},
  	render: function() {
    return (
    	<div className="m">
	    	<div className="l">
				<li><h4>{this.props.name}</h4></li><br/>
          <li><img src={require(this.props.image)}/></li>
		    	<p className="description">{this.props.description}</p>
          <li>${this.props.price}</li>
	    	</div>
        
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
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="menu" component={Menu} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
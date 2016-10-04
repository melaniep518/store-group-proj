// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
// require('./index.css');
// import data from './data';
// import 'bootstrap/dist/css/bootstrap.css';


// var App = React.createClass({
//   render: function() {
//     return (
//       <div>
//           <Nav />
//           {this.props.children}
//       </div>
//     )
//   }
// })

// var Nav = React.createClass({
//   render: function() {
//     return (
//       <div>
// { /*here
//     <nav className="navbar navbar-default">
//       <div className="container-fluid">
//         <div className="navbar-header">
//           <a className="navbar-brand" href="#">
//             <img alt="Brand" src="http://www.eisp.org.il/f-users/user_102867/website_103211/images/art-direction-png.png"/>
//           </a>
//         </div>
//       </div>
//     </nav>
// */}

// { /*here*/}
// <nav className="navbar navbar-default">
//   <div className="container-fluid">
//     { /* Brand and toggle get grouped for better mobile display*/}
//     <div className="navbar-header">

//        {/*TOGGLE BOTTON SHRINKS*/}
//       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//         <span className="sr-only">Toggle navigation</span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//       <a className="navbar-brand" href="#">
//       Amazing Art
//        {/*<img id="logo" alt="Brand" src="http://www.eisp.org.il/f-users/user_102867/website_103211/images/art-direction-png.png"/> */}
//       </a>
//     </div>

//     { /*Collect the nav links, forms, and other content for toggling */}
//     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul className="nav navbar-nav">
//         <li className="active"><a href="#"><Link to="/">Home</Link><span className="sr-only">(current)</span></a></li>
//         <li><a href="#"><Link to="about">About</Link></a></li>
//         <li><a href="#"><Link to="menu">New Art</Link></a></li>
//         <li><a href="#"><Link to="menu">Collections</Link></a></li>


//         <li className="dropdown">
//           <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Search by category <span className="caret"></span></a>
//           <ul className="dropdown-menu">
//             <li><a href="#">Action</a></li>
//             <li><a href="#">Another action</a></li>
//             <li><a href="#">Something else here</a></li>
//             <li role="separator" className="divider"></li>
//             <li><a href="#">Separated link</a></li>
//             <li role="separator" className="divider"></li>
//             <li><a href="#">One more separated link</a></li>
//           </ul>
//         </li>
//       </ul>
//       <form className="navbar-form navbar-left">
//         <div className="form-group">
//           <input type="text" className="form-control" placeholder="Quick Search"/>
//         </div>
//         <button type="submit" className="glyphicon glyphicon-search"></button>
//       </form>


//        {/*RIGHT NAV*/}
//       <ul className="nav navbar-nav navbar-right">
//         <li><a href="#">Login</a></li>
          
//           {/*CART*/}
//         <li><a href="#" className="glyphicon glyphicon-shopping-cart"><Link to="menu">Cart</Link></a></li>


  
       
//       </ul>
//     </div>{ /*/.navbar-collapse */}
//   </div>{ /*/.container-fluid */}
// </nav>
// { /*here*/}


//       {/*
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="menu">Menu</Link></li>
//           <li><Link to="about">About</Link></li>
//         </ul>
//       */}
        
//       </div>
//     )
//   }
// })

// var Home = React.createClass({
//     getInitialState(){
//     	return ({images:null})
// 	},
// 	componentWillMount(){
// 		// this.setState({images:data.getImages()})
//     // console.log('images', data.getImages())
// 	},
// 	render: function() {
		
// 	  return (
//       <div>
//         <h1>Welcome To Our Gallery Website</h1>
//         <h4>BROWSE AROUND TO SEE WHAT WE HAVE IN STORE FOR YOU.</h4>


//          {/*BOOTSTRAP BOTTONS*/} 
//         <button className="">Luis</button>
//         <button>
//           <span className='glyphicon glyphicon-thumbs-up'></span>
//         </button>
//         <button type="button" className="btn btn-success">Success</button>

//          {/* BOOTSTRAP TABLE*/} 
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-4">
//               One of three columns
//             </div>
//             <div className="col-sm-4">
//               One of three columns
//             </div>
//             <div className="col-sm-4">
//               One of three columns
//             </div>
//           </div>
//         </div>



//           {/* BOOTSTRAP TABLE FOR ALL ITEMS*/} 
//         <div className="row">
//           <div className="col-sm-6 col-md-4">
//             <div className="thumbnail">
//               <img src="http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg" alt="..."/>
//               <div className="caption">
//                 <h3>Thumbnail label</h3>
//                 <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-6 col-md-4">
//             <div className="thumbnail">
//               <img src="http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg" alt="..."/>
//               <div className="caption">
//                 <h3>Thumbnail label</h3>
//                 <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-6 col-md-4">
//             <div className="thumbnail">
//               <img src="http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg" alt="..."/>
//               <div className="caption">
//                 <h3>Thumbnail label</h3>
//                 <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div>
//     )
//   }
// })

// var Menu = React.createClass({
// 	getInitialState(){
// 		return ({menu:null,images: null})
// 	},
// 	componentWillMount(){
// 		this.setState({menu: data.getMenu()})
//     this.setState({images:data.getImages()})
// 	},
//   	render: function() {
//   	var arr= [];
//  //loops through data   
//    	for(var product in this.state.menu){
//    		arr.push(<h2>{product}</h2>)
//   		for(var i=0; i< this.state.menu[product].length;i++){
//   			arr.push(<MenuItem title= {product} name= {this.state.menu[product][i].name} price={this.state.menu[product][i].price} image={this.state.images[i]} description={this.state.menu[product][i].description} />)
//         console.log(this.state.images[i])
//   		}
//   	}
//     return (
//       <div>
//         <h1>Welcome To Our Gallery Website</h1>
//         <h4>BROWSE AROUND TO SEE WHAT WE HAVE IN STORE FOR YOU.</h4>


//          {/*BOTTONS*/}
//         <button className="">Luis</button>
//         <button>
//           <span className='glyphicon glyphicon-thumbs-up'></span>
//         </button>
//         <button type="button" className="btn btn-success">Success</button>

//          {/*BOOTSTRAP TABLE*/}
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-4">
//               One of three columns
//             </div>
//             <div className="col-sm-4">
//               One of three columns
//             </div>
//             <div className="col-sm-4">
//               One of three columns
//             </div>
//           </div>
//         </div>

//          {/*PRINTS ALL GALLERY*/}  
//         {arr}
//       </div>
  		  

      
//     )
//   }
// })

// var About = React.createClass({
// 	getInitialState(){
// 		return({about:null})
// 	},
// 	componentWillMount(){
// 		this.setState({about:data.getAbout()})
// 	},
//   render: function() {
//     return (
//       <div >
//         <h1 className="modal-header">About Luis</h1>
//         <p className="vertical-container">{this.state.about.restaurant_name}</p>
//         <p>{this.state.about.restaurant_slogan}</p>
//         <p>{this.state.about.restaurant_slogan1}</p>  
//         <h2 className="vertical-container">Contact</h2>
//         <p className="main">{this.state.about.restaurant_address}</p>
//         <p>{this.state.about.restaurant_email}</p> 
//         <p>{this.state.about.restaurant_phone}</p>
//       </div>
//     )
//   }
// })

// var MenuItem = React.createClass({
// 	getInitialState(){
// 		return ({product: null})
// 	},
//   	render: function() {
//     return (
//     	<div>
// 	    	<ul>
// 				<li>{this.props.name}</li><br/>
//           <li><img src={require(this.props.image)}/></li>
// 		    	<li>{this.props.description}</li>
//           <li>{this.props.price}</li>
// 	    	</ul>
        
//     	</div>
//     )
//   }
// })



// var NotFound = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>404</h1>
//       </div>
//     )
//   }
// })


// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home} />
//       <Route path="about" component={About} />
//       <Route path="menu" component={Menu} />
//     </Route>
//     <Route path="*" component={NotFound} />
//   </Router>,
//   document.getElementById('root')
// );
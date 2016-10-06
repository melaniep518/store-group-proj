import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Link} from 'react-router';

{/*NAVIGATION BAR*/}
var Nav = React.createClass({
  render: function() {
    return (
    <div>

       { /*FIRST NAV*/}
      <nav className="navbar main">
          <div className="logo col-xs-5">
            <a href="#" className="logoWidth">
             <img src= "http://i67.tinypic.com/35cisyg.jpg" />
            </a>
          </div>

          {/*SOCIAL MEDIA*/}
        <div className="socialSearch col-xs-7">
           <div className="social">
              <a className="media twitter" href="https://twitter.com/">
                <img src="http://www.freeiconspng.com/uploads/-van-nederland-elgie-gaat-haar-ontwikkeling-posten-op-twitter-24.png"/>
              </a>

              <a className="media facebook" href="https://www.facebook.com">
                <img src="http://www.masterdor.co.uk/Content/svg/icon-facebook.svg"/>
              </a>

              <a className="media pinterest" href="https://pinterest.com/">
                <img src="http://www.homeloans.com.au/wp-content/uploads/2015/10/social-media-icon-pinterest.png"/>
              </a>

              <a className="media instagram" href="https://www.instagram.com/?hl=en">
                <img src="https://anneauweiler.files.wordpress.com/2014/04/icon-instagram.png"/>
              </a>

            </div>

            <div className="input-group">
            <input type="text" className="form-control search" placeholder=" Quick Search"/>
              <button className="btn btn-default go" type="button">Search</button>
          </div>
          <p to="/" className="hours">TODAY'S HOURS: 10 a.m. - 6 p.m. </p>
           {/*ADDING LOGIN BUTTON          <div className="email_login">
            <Link to="/" className="glyphicon glyphicon-list-alt">Wish List  |</Link>
            <Link to="/" className="glyphicon glyphicon-heart">Like |</Link>
            <Link to="/" className="glyphicon glyphicon-envelope">Email  |</Link>
            <Link to="/" className="glyphicon glyphicon-pencil">Signup </Link>
            <li ><Link to="/" className="glyphicon glyphicon-lock">Login</Link></li>
          </div>
          */}

      </div>
      </nav>

      { /*SECOND NAV*/}
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          { /*Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">


              <li className="linetext"><Link to="menu">Home</Link></li>
              <li className="linetext"><Link to="/gallery/cat" params={{search: "cat"}}>Cat</Link></li>
              <li className="linetext"><Link to="/gallery/dragon" params={{search: "dragon"}}>Dragon</Link></li>
              <li className="linetext"><Link to="/gallery/giraffe" params={{search: "giraffe"}}>Giraffe</Link></li>
              <li className="linetext"><Link to="/gallery/unicorn" params={{search: "unicorn"}}>Unicorn</Link></li>
              <li className="linetext"><Link to="/gallery/walrus" params={{search: "walrus"}}>Walrus</Link></li>


              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Category <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/gallery/funny" params={{search: "funny"}}>Funny</Link></li>
                  <li><Link to="/gallery/eerie" params={{search: "eerie"}}>Eerie</Link></li>
                  <li><Link to="/gallery/weird" params={{search: "weird"}}>Weird</Link></li>
                </ul>
              </li>
            </ul>



             {/*RIGHT NAV**/}
            <ul className="nav navbar-nav navbar-right">
<<<<<<< HEAD
              <li ><Link to="login" className="glyphicon glyphicon-circle-arrow-up">Gallery</Link></li>


=======
              <li ><Link to="/gallery/all" params={{search: "all"}} className="glyphicon glyphicon-circle-arrow-up">Gallery</Link></li>
                
                
>>>>>>> afe63c5a64d95cc4bf68cc6af4d42fd47980140d
              <li ><Link to="menu" className="glyphicon glyphicon-shopping-cart">Cart</Link></li>




            </ul>

          </div>{ /*/.navbar-collapse */}
        </div>{ /*/.container-fluid */}
      </nav>

    </div>
    )
  }
})

export default Nav;

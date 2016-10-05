import React from 'react';
import {Link} from 'react-router';

{/*NAVIGATION BAR*/}
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


          {/*SOCIAL MEDIA*/}
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
              <Link to="/">Home</Link>
          </div>

          { /*Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="linetext"><Link to="/">Cat</Link><span className="sr-only">(current)</span></li>
              <li className="linetext"><Link to="menu">Dragon</Link></li>
              <li className="linetext"><Link to="about">Giraffe</Link></li>
              <li className="linetext"><Link to="menu">Unicorn</Link></li>
              <li className="linetext"><Link to="about">Walrus</Link></li>


              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Search by category <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="about">Funny</Link></li>
                  <li><Link to="about">Eerie</Link></li>
                  <li><Link to="about">Weird</Link></li>
                </ul>
              </li>
            </ul>
            


             {/*RIGHT NAV*/}
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Login</a></li>
                
                {/*CART*/}
              <li ><Link to="menu" className="glyphicon glyphicon-shopping-cart">Cart</Link></li>


        
             
            </ul>
          </div>{ /*/.navbar-collapse */}
        </div>{ /*/.container-fluid */}
      </nav> 

    </div>
    )
  }
})

export {Nav};


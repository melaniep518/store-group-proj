import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./gallery.css');
require("./home.css")
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';

var Footer = React.createClass({
	render: function () {
		return (

		<div className="footer-box">
				<div className="footer-info" width="100">
						<div className="creditsOne">
							<h6>Art Dealers</h6>
							<li>Madame Melanie Williams</li>
							<li>Madame Dee Sterling</li>
							<li>Sir Luis Carbjal</li>
							<li>Sir Matt M. Jennings</li>
						</div>

						<div className="credits">
							<h5>Customer Service: 1-800-123-4567</h5>
						</div>

						<div className="credits">
							<h5>31-00 47th Avenue #1105 Long Island City, NY 11101</h5>
						</div>
					</div>



					<div className="footer-color">
								<div className= "footer-credits">
									<p>Copyright 2016 Amazing Art Gallery / Coalition For Queens</p>
								</div>
						</div>
					</div>
		)
	}
});


// ReactDOM.render(<Footer />, document.getElementById('root'))
export default Footer;

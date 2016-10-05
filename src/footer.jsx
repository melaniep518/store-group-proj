import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./index.css');
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';

var Footer = React.createClass({
	render: function () {
		return (	
			<div className="row footerwalrus">
				<div className="col-md-2">
					<table>
						<tr>
							<th>Team Members</th>
						</tr>
						<tr>
							<td>Melanie Williams</td>
						</tr>
						<tr>
							<td>Dee Sterling</td>
						</tr>
						<tr>
							<td>Luis Carbjal</td>
						</tr>
						<tr>
							<td>Matt M. Jennings</td>
						</tr>
					</table>
				</div>
				<div className="col-md-4">
					<h5>31-00 47th Avenue #1105 Long Island City, NY 11101</h5>
				</div>
				<div className="col-md-4">
					<h5>Customer Service: 1-800-123-4567</h5>
				</div>
			</div>
		)
	}
})

// ReactDOM.render(<Footer />, document.getElementById('root'))
export default Footer;
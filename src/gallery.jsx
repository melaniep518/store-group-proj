import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import MenuItem from './menuitem';

var Gallery = React.createClass({
	generateMenuItems: function(gallery, props) {
		var animal = props.params.animal;
		var targetArray = gallery.filter(function (ele, ind, arr) {
			return arr[ind].animal == animal;
		})
		var itemArray = [];
		targetArray.forEach((ele, ind, arr) => {
			itemArray.push(<MenuItem info={ele} />)
		})
		this.setState({shownItems: itemArray})
	},
	getInitialState: function () {
		return {gallery: null, shownItems: null}
	},
	componentWillMount: function () {
		var gallery = data.getGallery()
		this.setState({gallery: gallery})
		this.generateMenuItems(gallery, this.props);
	}, 
	componentWillReceiveProps: function (nextProps) {
		this.generateMenuItems(this.state.gallery, nextProps);
		
	},
	render: function () {
		return (
			<div>
				{this.state.shownItems}
			</div>
		)
	}
})

export default Gallery;
import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import MenuItem from './menuitem';
import {Details} from './detailmodal.jsx'

var Gallery = React.createClass({
	generateMenuItems: function(gallery, props) {
		var search = props.params.search;
		var targetArray = [];
		var itemArray = [];

		if (search == "cat" || search == "unicorn" || search == "giraffe" || search == "dragon" || search == "walrus") {
			targetArray = gallery.filter((ele, ind, arr) => {return arr[ind].animal == search;})
		} else if (search == "eerie" || search == "funny" || search == "weird") {
			targetArray = gallery.filter((ele, ind, arr) => {return arr[ind].adj == search;})
		} else if (search == "all") {
			targetArray = gallery;
		}

		targetArray.forEach((ele, ind, arr) => {
			itemArray.push(
				<div>
					<MenuItem key={'item_'+ind} info={ele}/>
					<Details key={'modal_'+ind} info={ele}/>
				</div>
			)
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
import React from 'react';
require('./index.css');
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Modal} from 'react-bootstrap';



const Details = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    var modalStyle = {
      backgroundColor: '#d3d8db',
      textAlign: 'center'
    }

    var headerStyle = {
      backgroundColor: '#d3d8db',
      fontSize: 'xx-small',  
    }

    var bodyStyle = {

    }

    var footerStyle = {

    }

    return (
      <div>
        
        <Button
          bsStyle="info"
          bsSize="xsmall"
          onClick={this.open}>
          Click for more!
        </Button>

        <Modal bsStyle="modal" show={this.state.showModal} onHide={this.close}>
          
          <Modal.Header style={headerStyle} closeButton>
            <Modal.Title  style={headerStyle}>Amazing Animal Art: Gallery of the Perculiar</Modal.Title>
          </Modal.Header>
          
          <Modal.Body style={modalStyle}>
            <h1>{this.props.info.title}</h1>
            <img width="100%" height="auto" src={require(this.props.info.img)}/>
            <hr />

            <h4>Get this piece for {this.props.info.price}</h4>
            <Button bsStyle="danger">Add to cart</Button>

            <h4>Tags:</h4>
            <p>{this.props.info.animal}, {this.props.info.adj}</p>
          </Modal.Body>
          
          <Modal.Footer style={modalStyle}>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
       
        </Modal>
      </div>
    );
  }
});

export {Details};
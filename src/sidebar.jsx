import React from 'react';
require('./index.css'); 
import data from './data';


var Sidebar = React.createClass({
  getInitialState(){
    return ({menu:null,images: null})
  },
  componentDidMount(){
    var gallData = data.getGallery();
    this.setState({menu: gallData})
  },
    render() {
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
            <ul>
              {this.state.menu ? this.state.menu.map((item, indx) => <li>{item.title}</li>) : null}
            </ul>
          </div>
      </div>      
    )
  }
})
 export {Sidebar};
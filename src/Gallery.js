import React from 'react';
import data from './data';  

 {/*GALLERY COMPONENT & SIDEBAR*/}
var Gallery = React.createClass({
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
          <div>
            <ul>
             {this.state.menu ? this.state.menu.map((item, indx) => 
              <div className="itemGallery">
              <li className="listGallery">
                {item.title}<br/>
                <img src={require(item.img)}/><br/>
                {item.price}
              </li>
              </div>
              ) : null}
             </ul>
          </div>
      </div>
      
    )
  }
})

export default Gallery;


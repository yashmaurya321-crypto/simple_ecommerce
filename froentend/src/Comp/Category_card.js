import React from 'react';
import './Categor.css';
import { Link } from "react-router-dom";
import men from './mens.jpg'
import women from './wo.jpg'
function Category_card() {
  
  return (
    <div style={{background : 'black', color: 'white', padding : 76}}>
    <div style={{display : 'flex'}}>
    <h1>Category</h1> <hr style={{paddingLeft : 8,width:'70%', textAlign : 'left', marginLeft : 30}}/>
    </div>
     <div className='cards' style={{margin : 10}}>
      <Link to= '/men'>
      <div class="card1">
  <div class="card12">
    <img src={men} class="card-img-top" alt="..." style = {{borderRadius : 20, width : 490, height : 254}}/>
  </div>
</div>
      </Link>
    
      <Link to= '/women'>
      <div class="card1">
  <div class="card12">
    <img src={women} class="card-img-top" alt="..." style = {{borderRadius : 20, width : 490, height : 254}}/>
  </div>
</div>
      </Link>
     </div>
    
    </div>
  );
}

export default Category_card;

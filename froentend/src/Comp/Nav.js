import React, { useState } from 'react';
import logo from './LOGO.jpg';
import './Nav.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Nav() {
  const cart = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const handelbuy = () =>{
  alert("Your order is placed you have ordered " + cart.length + " items");
}
  const toggleOffcanvas = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Watch</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav-underline navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            </ul>
            <ul className='nav-underline navbar-nav me-auto mb-2 mb-lg-0 justify-content-end'>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/men">Men</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/women">Women</a>
              </li>
              <li class="nav-item">
                <a class=" nav-link custom-menu-toggle" 
                  data-bs-toggle="offcanvas" href="#offcanvasExample" 
                  role="button" aria-controls="offcanvasExample" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4z"/>
                  </svg>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Cart</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          {console.log(cart)}
          {cart.map(item => (
             <div key = {item.id} style = {{padding : 10}}>
             <div className="package">
               <div className="package2" style = {{color : 'white', }}>
                 <img src={item.image_url} width={167} height={130} style={{ borderRadius: 10, paddingBottom: 6 }} alt={`${item.brand} - ${item.model}`} />
                 <p >{item.brand} - {item.model}</p>
                 <p>Price - {item.price}</p>
                
               </div>
             </div>
           </div>
          ))}
          
        </div>
        <div class="buy-button-container" style={{backgroundColor : 'white'}}>
            <button class="btn-12" onClick={handelbuy}><span>Buy</span></button>
          </div>
      </div>
    </div>
  );
}

export default Nav;


   
 
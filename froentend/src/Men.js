import React from 'react';
import { menWatches } from './data/data';
import './men.css'
import Card from './Comp/Card';
import a from './data/10.jpg'
function Men() {
  return (
    <div style = {{backgroundColor : 'black', color : 'white'}}>
      <div style={{ backgroundImage: `url(${a})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        paddingBottom: '100px',
        marginBottom: '90px',
        }}>
           <h2>Men's Watches</h2>
        </div>
   
    <ul style = {{listStyle : 'none', display : 'flex', flexWrap : 'wrap'}}>
        {menWatches.map(watch => (
            <li key={watch.id} style = {{padding : 10}}>
            <Card brand = {watch.brand}image_url={watch.image_url} price = {watch.price} model = {watch.model}  case_material = {watch.case_material} water_resistance = {watch.water_resistance}/>
            </li>
        ))}
    </ul>
</div>
  );
}

export default Men;

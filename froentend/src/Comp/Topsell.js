import React from 'react';
import Card from './Card';
import { topsell } from '../data/data';
import './topsell.css'
function Topsell() {
  return (
    <div style={{ background: 'black', color: 'white', padding: 76 }}>
      <div style={{ display: 'flex' }}>
        <h1>Top sell</h1> 
        <hr style={{ paddingLeft: 8, width: '70%', textAlign: 'left', marginLeft: 30 }}/>
      </div>
      <div>
        <ul style={{ listStyle: 'none', padding: 0, display : 'flex' }}> {/* Apply list styles */}
          {topsell.map(watch => (
            <li key={watch.id} style = {{padding : 8}}>
              <Card brand = {watch.brand}image_url={watch.image_url} price = {watch.price} model = {watch.model}  case_material = {watch.case_material} water_resistance = {watch.water_resistance}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Topsell;

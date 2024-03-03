import React from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/action';

function Card({ brand, model, price, case_material, water_resistance, image_url }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addtocart({brand, model, price, case_material, water_resistance, image_url}));
  };

  return (
    <div>
      <div className="package">
        <div className="package2">
          <img src={image_url} width={167} height={130} style={{ borderRadius: 10, paddingBottom: 6 }} alt={`${brand} - ${model}`} />
          <p>{brand} - {model}</p>
          <p>Price - {price}</p>
          <button className="Btn" onClick={handleAddToCart}>
            <div className="sign">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path fill="currentColor" d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4z" />
              </svg>
            </div>
            <div className="text">Add to cart</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

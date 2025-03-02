import React from 'react';
import './productCard.css';

export default function ProductCard(props) {


  return (
    <div className="product-card">
      <img
        src={props.image}
        alt="Product image"
      />
      <span>{props.name}</span>
      <span>{props.price}</span>
    </div>
  );
}

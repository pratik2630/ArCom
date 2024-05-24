import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <button onClick={() => window.location.href = product.arLink}>View in AR</button>
    </div>
  );
};

export default ProductCard;

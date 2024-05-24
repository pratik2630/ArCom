import React from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const products = [
  { id: 1, name: 'Sofa', price:67500, image: 'https://www.modholic.in/cdn/shop/products/MD-1022-2P-BEI_01.jpg?v=1683681493&width=823', arLink: 'https://mywebar.com/p/Project_0_mbhliv71ja' },
  { id: 2, name: 'Armchair', price: 45000, image: 'https://media.istockphoto.com/id/1321320075/photo/3d-rendering-of-an-isolated-modern-pale-green-mid-century-cosy-lounge-wingback-armchair.jpg?s=612x612&w=0&k=20&c=ziAdbDP5iUEQ1OZinRyBt5Wy8LvRtcKz9OLU22V2jgs=', arLink: '#ar-armchair' },
  { id: 3, name: 'Recliner', price: 54800, image: 'https://www.cherrypickindia.in/wp-content/uploads/2020/07/IMG-SINGLE-SEATER-RECLINER-DIVANI-MODEL-S325-2.jpg', arLink: '#ar-recliner' },
  { id: 4, name: 'Dining Chair', price: 30000, image: 'https://m.media-amazon.com/images/I/61ukv+zdLDL._SX300_SY300_.jpg', arLink: '#ar-diningchair' },
  { id: 5, name: 'Ottoman', price: 20000, image: 'https://mysleepyhead.com/media/catalog/product/s/l/sleepyhead_sectional_sofa_9.jpg?auto=webp&format=pjpg&width=320&height=400&fit=cover', arLink: '#ar-ottoman' },
  { id: 6, name: 'Chaise Lounge', price: 75000, image: 'https://ouchcart.com/cdn/shop/products/Fuhr_Tufted_Armless_Chaise_Lounge.jpg?v=1637931363&width=600', arLink: '#ar-chaiselounge' },
  { id: 7, name: 'Bar Stool', price: 12000, image: 'https://ii1.pepperfry.com/media/catalog/product/d/e/764x840/deva-fabric-bar-stool-in-green-colour-deva-fabric-bar-stool-in-green-colour-js9sk1.jpg', arLink: '#ar-barstool' },
  { id: 8, name: 'Office Chair', price: 27500, image: 'https://cellbell.in/cdn/shop/products/Taurus-C100-Lite-Executive-Office-Chair-Cellbell-1674805402.jpg?v=1714741253&width=1946', arLink: '#ar-officechair' },
  { id: 9, name: 'Gaming Chair', price: 32000, image: 'https://astrixinc.in/cdn/shop/products/baazichairs_11of28_1200x_67b219af-2f9a-48ce-8a67-3e9ed35213a6_533x.jpg?v=1702539483', arLink: '#ar-gamingchair' },
  { id: 10, name: 'Rocking Chair', price: 60000, image: 'https://images-cdn.ubuy.ae/643eba5de74c15631071603d-mid-century-modern-fabric-rocking-chair.jpg', arLink: '#ar-rockingchair' },
];

const Products = () => {
  return (
    <div className="products">
      <h2>Our Popular Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

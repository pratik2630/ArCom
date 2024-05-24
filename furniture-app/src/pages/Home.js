import React from 'react';
import './Home.css';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Sofa', price: 67500, image: 'https://www.modholic.in/cdn/shop/products/MD-1022-2P-BEI_01.jpg?v=1683681493&width=823', arLink: 'https://mywebar.com/p/Project_0_mbhliv71ja' },
  { id: 2, name: 'Armchair', price: 45000, image:' https://media.istockphoto.com/id/1321320075/photo/3d-rendering-of-an-isolated-modern-pale-green-mid-century-cosy-lounge-wingback-armchair.jpg?s=612x612&w=0&k=20&c=ziAdbDP5iUEQ1OZinRyBt5Wy8LvRtcKz9OLU22V2jgs=', arLink: '#ar-armchair' },
  { id: 3, name: 'Recliner', price: 54800, image: 'https://www.cherrypickindia.in/wp-content/uploads/2020/07/IMG-SINGLE-SEATER-RECLINER-DIVANI-MODEL-S325-2.jpg', arLink: '#ar-recliner' },
  { id: 4, name: 'Dining Chair', price: 30000, image: 'https://m.media-amazon.com/images/I/61ukv+zdLDL._SX300_SY300_.jpg', arLink: '#ar-diningchair' },
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Make Interior in Your House</h1>
        <p>Discover the best furniture for your home</p>
        <button>Shop Now</button>
      </section>
      
      <section className="features">
        <div className="feature">
          <h3>Best Quality</h3>
          <p>We offer the best quality furniture</p>
        </div>
        <div className="feature">
          <h3>Free Shipping</h3>
          <p>Get free shipping on all orders</p>
        </div>
        <div className="feature">
          <h3>24/7 Support</h3>
          <p>Our support team is available 24/7</p>
        </div>
      </section>
      
      <section className="popular-products">
        <h2>Our Popular Products</h2>
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

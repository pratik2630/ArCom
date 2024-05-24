import React from 'react';
import './AboutUs.css';
import AboutUsImage from '../assets/about-us.png';
import Offers from '../components/Offers';

const AboutUs = () => {
  return (
    <section className="about-us-section mt-10 md:mt-20">
      <div className="shared-banner">About Us</div>
      <div className="about-us-content md:px-20 md:py-20">
        <div className="image-container">
          <img src={AboutUsImage} alt="about-us" className="about-us-image" />
        </div>
        <div className="text-content">
          <h1 className="title">
            KNOW ABOUT OUR ECOMMERSE <br /> Business, History
          </h1>
          
          <p className="intro">
            Welcome to our furniture store! We have been in the business of providing high-quality, stylish, and affordable furniture for over a decade. Our mission is to enhance the beauty and comfort of your home with our exquisite furniture pieces. Our journey started in a small workshop, and today we have grown into a well-known brand in the industry.
          </p>
          <p className="history">
            <strong>Our History:</strong> From our humble beginnings, we have always prioritized quality and customer satisfaction. Over the years, we have expanded our product range to include a variety of styles to suit every taste and budget. Our dedicated team works tirelessly to bring you the latest trends and timeless classics in furniture design. We believe in creating spaces that reflect your personality and style, and we are committed to helping you achieve that.
          </p>
          <button className="action-button">Contact us</button>
        </div>
      </div>

      <div className="features-section md:px-20">
        <h2 className="shared-text">Our Features</h2>
        <Offers />
      </div>
    </section>
  );
};

export default AboutUs;

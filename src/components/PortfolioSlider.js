import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

export const PortfolioSlider = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.portfolio-details-slider', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    // Cleanup on component unmount
    return () => {
      swiper.destroy(); // Destroy Swiper instance to avoid memory leaks
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="portfolio-details-slider swiper init-swiper">
      <div className="swiper-wrapper align-items-center">
        <div className="swiper-slide">
          <img src="assets/img/portfolio/app-1.jpg" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="assets/img/portfolio/product-1.jpg" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="assets/img/portfolio/branding-1.jpg" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="assets/img/portfolio/books-1.jpg" alt="" />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

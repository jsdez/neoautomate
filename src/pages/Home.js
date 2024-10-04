import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Features from '../components/Features';
import ServicesAlt from '../components/ServicesAlt';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Contact from '../components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/css';
import '../App.css';

const Home = () => {
  // Scroll to top functionality
  useEffect(() => {
    const scrollToTopBtn = document.getElementById('scroll-top');

    const scrollHandler = () => {
      if (window.scrollY > 100) {
        scrollToTopBtn.classList.add('active');
      } else {
        scrollToTopBtn.classList.remove('active');
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // Preloader functionality
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.style.display = 'none';
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Index - Neo Automate</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Preloader */}
      <div id="preloader"></div>

      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <Services />

      {/* Clients Section */}
      <Clients />

      {/* Features Section */}
      <Features />

      {/* ServicesAlt Section */}
      <ServicesAlt />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

      {/* Scroll Top Button */}
      <button
        type="button"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Smooth scroll to the top
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </>
  );
};

export default Home;

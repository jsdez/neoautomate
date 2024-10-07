import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
// import About from '../components/About';
// import Stats from '../components/Stats';
// import Services from '../components/Services';
// import Clients from '../components/Clients';
// import Features from '../components/Features';
// import ServicesAlt from '../components/ServicesAlt';
// import Testimonials from '../components/Testimonials';
// import Portfolio from '../components/Portfolio';
// import Team from '../components/Team';
// import Contact from '../components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const Home = () => {
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
      </Helmet>

      {/* Preloader */}
      <div id="preloader"></div>

      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      {/*<About /> */}

      {/* Stats Section */}
      {/*<Stats /> */}

      {/* Services Section */}
      {/*<Services /> */}

      {/* Clients Section */}
      {/*<Clients /> */}

      {/* Features Section */}
      {/*<Features /> */}

      {/* ServicesAlt Section */}
      {/*<ServicesAlt /> */}

      {/* Testimonials Section */}
      {/*<Testimonials /> */}

      {/* Portfolio Section */}
      {/*<Portfolio /> */}

      {/* Team Section */}
      {/*<Team /> */}

      {/* Contact Section */}
      {/*<Contact /> */}

      {/* Footer Section */}
      <Footer />

      {/* Scroll Top Button */}
    </>
  );
};

export default Home;

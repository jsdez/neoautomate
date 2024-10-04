import React, { useEffect, useState } from 'react';
import 'swiper/css';

// Import your existing components
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import { PortfolioSlider } from '../components/PortfolioSlider';

const PortfolioDetails = () => {

    const [visible, setVisible] = useState(false);

    // Function to handle scroll visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true); // Show button after scrolling down 300px
      } else {
        setVisible(false); // Hide button
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll); // Attach scroll event listener
      return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
      };
    }, []);
  
    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
      });
    };
  

  return (
    <div className="portfolio-details-page">
      <Header />

      <main className="main">
        {/* Page Title */}
        <div
          className="page-title dark-background"
          style={{
            backgroundImage: "url(assets/img/page-title-bg.webp)",
          }}
        >
          <div className="container position-relative">
            <h1>Portfolio Details</h1>
            <p>
              Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
              placeat quibusdam quia assumenda numquam molestias.
            </p>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Portfolio Details</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* End Page Title */}

        {/* Portfolio Details Section */}
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-8">
                <PortfolioSlider />
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: Web design</li>
                    <li><strong>Client</strong>: ASU Company</li>
                    <li><strong>Project date</strong>: 01 March, 2020</li>
                    <li>
                      <strong>Project URL</strong>: <a href="#">www.example.com</a>
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                  <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Portfolio Details Section */}
      </main>

      <Footer />
      
      {/* Scroll Top */}
      {visible && ( // Only show button when visible is true
        <button
          onClick={scrollToTop}
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </button>
      )}

      {/* Preloader */}
      <div id="preloader"></div>
    </div>
  );
};

export default PortfolioDetails;

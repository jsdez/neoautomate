import React from 'react';

const portfolioItems = [
  {
    filter: "filter-app",
    imgSrc: "assets/img/portfolio/app-1.jpg",
    title: "App 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    gallery: "portfolio-gallery-app"
  },
  {
    filter: "filter-product",
    imgSrc: "assets/img/portfolio/product-1.jpg",
    title: "Product 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    gallery: "portfolio-gallery-product"
  },
  {
    filter: "filter-branding",
    imgSrc: "assets/img/portfolio/branding-1.jpg",
    title: "Branding 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    gallery: "portfolio-gallery-branding"
  },
  {
    filter: "filter-books",
    imgSrc: "assets/img/portfolio/books-1.jpg",
    title: "Books 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    gallery: "portfolio-gallery-book"
  },
  // Add more items as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>CHECK OUR PORTFOLIO</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItems.map((item, index) => (
              <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}>
                <div className="portfolio-content h-100">
                  <img src={item.imgSrc} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.imgSrc} title={item.title} data-gallery={item.gallery} className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import '../App.css'; // Your custom styles
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    img: "assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    position: "Ceo & Founder",
    rating: 5,
    feedback: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
  },
  {
    img: "assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    position: "Designer",
    rating: 5,
    feedback: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
  },
  {
    img: "assets/img/testimonials/testimonials-3.jpg",
    name: "Jena Karlis",
    position: "Store Owner",
    rating: 5,
    feedback: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
  },
  {
    img: "assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    position: "Freelancer",
    rating: 5,
    feedback: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
  },
  {
    img: "assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    position: "Entrepreneur",
    rating: 5,
    feedback: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section dark-background">
      <img src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="Testimonials Background" />
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]} // Pass modules directly
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          slidesPerView="auto"
          pagination={{ clickable: true, type: 'bullets' }}
          className="swiper-wrapper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonial.img} className="testimonial-img" alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.position}</h4>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((star, i) => (
                    <i className="bi bi-star-fill" key={i}></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.feedback}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;

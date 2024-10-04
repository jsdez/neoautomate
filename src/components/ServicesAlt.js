import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'aos/dist/aos.css'; // AOS for animations
import '../App.css';

const servicesData = [
  {
    icon: "bi bi-briefcase",
    title: "Lorem Ipsum",
    description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    delay: 100
  },
  {
    icon: "bi bi-card-checklist",
    title: "Dolor Sitema",
    description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    delay: 200
  },
  {
    icon: "bi bi-bar-chart",
    title: "Sed ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    delay: 300
  },
  {
    icon: "bi bi-binoculars",
    title: "Magni Dolores",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    delay: 400
  },
  {
    icon: "bi bi-brightness-high",
    title: "Nemo Enim",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    delay: 500
  },
  {
    icon: "bi bi-calendar4-week",
    title: "Eiusmod Tempor",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    delay: 600
  }
];

const ServicesAlt = () => {
  return (
    <section id="services-2" className="services-2 section light-background">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>CHECK OUR SERVICES</p>
      </div>

      <div className="container">
        <div className="row gy-4">

          {servicesData.map((service, index) => (
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={service.delay} key={index}>
              <div className="service-item d-flex position-relative h-100">
                <i className={`${service.icon} icon flex-shrink-0`}></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">{service.title}</a>
                  </h4>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesAlt;

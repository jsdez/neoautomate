import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'aos/dist/aos.css'; // AOS for animations
import '../App.css';

const Clients = () => {
  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">
          
          {/* Client 1 */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-1.png" className="img-fluid" alt="Client 1" />
          </div>
          
          {/* Client 2 */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-2.png" className="img-fluid" alt="Client 2" />
          </div>
          
          {/* Client 3 */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-3.png" className="img-fluid" alt="Client 3" />
          </div>
          
          {/* Client 4 */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-4.png" className="img-fluid" alt="Client 4" />
          </div>
          
          {/* Client 5 */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-5.png" className="img-fluid" alt="Client 5" />
          </div>
          
          {/* Client 6 */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-6.png" className="img-fluid" alt="Client 6" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Clients;

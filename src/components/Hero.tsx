import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image';
import ContactOffcanvas from "./ContactOffcanvas";

const Hero: React.FC = () => {
  return (
    <section
      className="hero-section d-flex align-items-center py-5 position-relative"
      style={{
        background:
          "linear-gradient(180deg, hsla(260, 84%, 51%, 1) 0%, hsla(320, 32%, 50%, 1) 100%)",
        minHeight: "95vh",
        paddingBottom: "20px", // Optional, if you want some space below the content
      }}
    >

    <Container className="text-center">
      <Row>
        <Col>
          {/* Add a centered image */}
          <div style={{ position: "relative", width: "80%", height: "300px", margin: "0 auto" }}>
            <Image 
              src="/assets/construction.png" 
              alt="Under Construction" 
              fill 
              style={{ objectFit: "contain" }} 
            />
          </div>
          <h1 className="display-5 fw-bold text-white mb-4">
            Under Construction
          </h1>
          <div className="text-white text-center">
            <p className="lead mb-3">
              We&apos;re currently under construction, but we&apos;re working behind the scenes to bring you insightful content and practical tips to streamline your workflows.
            </p>
            <p className="lead">
              Check back soon for updates—we&apos;re excited to help you transform the way you work!
            </p>
          </div>
          <div className="d-none">
          {/* gap-2 d-sm-flex justify-content-sm-center */}
            {/* Explore Services Button */}
            <Link href="/services" passHref>
              <Button className="btn-neo-primary btn-lg px-4 gap-3">
                Explore Our Services
              </Button>
            </Link>

            {/* Get in Touch Button triggers the offcanvas */}
            <ContactOffcanvas>
              <Button className="btn-neo-secondary-outline btn-lg px-4">
                Get in Touch
              </Button>
            </ContactOffcanvas>
          </div>
        </Col>
      </Row>
    </Container>

      {/* Static Wave with Thicker Middle */}
      <div className="wave-container position-absolute bottom-0 start-0 w-100" style={{ marginBottom: "-5px" }}>
        <span>
          <div className="svg-border-rounded text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              fill="currentColor"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <path
                fill="white"
                fillOpacity="1"
                d="M0,128L120,144C240,160,480,192,720,197.3C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
        </span>
      </div>
    </section>
  );
};

export default Hero;

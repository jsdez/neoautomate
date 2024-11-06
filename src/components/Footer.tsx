import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row">

          {/* Social Media Links */}
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <Link href="https://www.linkedin.com/in/jake-dennison-fcl/" className="text-muted">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-6">
            <h5>Contact</h5>
            <address className="text-muted">
              Email: <a href="mailto:info@neoautomate.com" className="text-muted">info@neoautomate.com</a><br />
            </address>
          </div>
        </div>

        {/* Copyright */}
        <hr />
        <p className="text-center text-muted">
          &copy; {new Date().getFullYear()} Neo Automate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

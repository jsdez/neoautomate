import { ReactNode, useState } from "react";
import { Button, Offcanvas, Alert } from "react-bootstrap";

// Adding ReactNode to define children prop
const ContactOffcanvas: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(""); // to show success or error messages
  const [alertVariant, setAlertVariant] = useState<"success" | "danger">("success");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const handleToggle = () => setShow((prevState) => !prevState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setFormStatus("Your message has been sent successfully!");
      setAlertVariant("success");
      setFormData({ name: "", email: "", message: "" }); // Reset form
      setTimeout(() => setShow(false), 3000); // Close offcanvas after 3 seconds
    } else {
      setFormStatus("There was an error submitting your message. Please try again.");
      setAlertVariant("danger");
    }

    setIsSubmitting(false); // Reset submitting state
  };

  return (
    <>
      {/* Render children (button) passed to ContactOffcanvas */}
      {children}

      <Offcanvas show={show} onHide={handleToggle} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as="h5">Get in Touch</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <label htmlFor="name" className="mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mb-3 p-2"
            />

            <label htmlFor="email" className="mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mb-3 p-2"
            />

            <label htmlFor="message" className="mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="mb-3 p-2"
              rows={4}
            />

            <Button 
              type="submit" 
              className="btn-neo-primary btn-lg" 
              disabled={isSubmitting} // Disable when submitting
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {formStatus && (
            <Alert variant={alertVariant} className="mt-3">
              {formStatus}
            </Alert>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ContactOffcanvas;

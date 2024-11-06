import { useState } from "react";
import { Button, Form, OverlayTrigger, Popover, Anchor } from "react-bootstrap";

const ContactPopover: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const response = await fetch("https://formsubmit.co/ajax/youremail@example.com", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setStatus("Thank you for your message! We'll get back to you soon.");
    } else {
      setStatus("Oops! Something went wrong, please try again.");
    }
  };

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={
        <Popover>
          <Popover.Header as="h3">Contact Us</Popover.Header>
          <Popover.Body>
            <Form onSubmit={handleSubmit} action="https://formsubmit.co/youremail@example.com" method="POST">
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {status && <p>{status}</p>}
          </Popover.Body>
        </Popover>
      }
    >
      <Anchor className="text-success">Contact Us</Anchor>
    </OverlayTrigger>
  );
};

export default ContactPopover;

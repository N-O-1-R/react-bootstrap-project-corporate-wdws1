import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your contact message"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          {/* Ubah gap-5 menjadi gap-3 atau gap-4 agar muat 3 berjejer */}
          <ul className="d-flex justify-content-center flex-wrap gap-3 list-unstyled text-center m-0 p-0">
            <li
              className="d-flex flex-column align-items-center"
              style={{ minWidth: "200px" }}
            >
              <i className="fas fa-envelope mb-2" style={{ margin: 0 }}></i>
              hello@domain.com
            </li>

            <li
              className="d-flex flex-column align-items-center"
              style={{ minWidth: "200px" }}
            >
              <i className="fas fa-phone mb-2" style={{ margin: 0 }}></i>
              000-000-0000
            </li>

            <li
              className="d-flex flex-column align-items-center"
              style={{ minWidth: "200px" }}
            >
              <i
                className="fas fa-map-marker-alt mb-2"
                style={{ margin: 0 }}
              ></i>
              London, United Kingdom
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/img1.jpg';


export default function AppAbout() {
    return(
        <section id="about" className="block about-block">
           <Container fluid>
            <div className="title-holder">
                <h2>About Us</h2>
                <div className="subtitle">learn more about us</div>
            </div>
            <Row>
                <Col sm={6}>
                <Image src={img1}/>
                </Col>
                <Col sm={6}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
            </Container>
        </section>

    );
}

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


import img1 from '../assets/images/img1.jpg';


export default function AppAbout() {
    const html = 80;
    const responsive = 95;
    const photoshop = 50;

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
                <p>Welcome to Corporate, where professionalism meets innovation. We are dedicated to helping businesses and individuals achieve their goals with tailored solutions that inspire growth and success. Our team combines expertise, creativity, and technology to deliver services that truly make a difference. At Corporate, we value trust, integrity, and long-term partnerships. We believe every client deserves personalized attention and results that exceed expectations. Whether you’re looking to strengthen your brand, streamline operations, or plan for the future, we are here to guide you every step of the way. Corporate is more than a name—it’s your partner in progress.</p>
                
                <div className="progress-block">
                    <h4>HTML / CSS / Javascript</h4>
                    <ProgressBar now={html} label={`${html}%`} />
                </div>
                <div className="progress-block">
                    <h4>RESPONSIVE</h4>
                    <ProgressBar now={responsive} label={`${responsive}%`} />
                </div>
                <div className="progress-block">
                    <h4>PHOTOSHOP</h4>
                    <ProgressBar now={photoshop} label={`${photoshop}%`} />
                </div>
                </Col>
            </Row>
            </Container>
        </section>

    );
}

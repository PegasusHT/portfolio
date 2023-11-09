import Fade from 'react-reveal/Fade';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Contact = () => {
    const email = 'jimmybuidev@gmail.com';
    const phone = '+1 604-679-3718';

    return (
        <section id='contact'>
            <Container className='contact-container'>
                <Row>
                    <Fade bottom duration={1000} delay={300} distance="0px">
                        <h2 className="section-title">Contact</h2>
                    </Fade>
                </Row>
                <Fade bottom duration={1000} delay={500} distance="0px">
                    <Row >
                        <Col className='contact-text'>
                            <p>Would you like to work with me? Awesome!</p>
                        </Col>
                        <Col className='contact-wrapper'>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta cta-btn--resume"
                                href={`mailto:${email}`}
                            >
                                {"Email: jimmybuidev@gmail.com"}
                            
                            </a>
                        </Col>
                        <Col className='contact-wrapper'>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta cta-btn--resume"
                                href={`tel:${phone}`}
                            >
                                {"Phone number: +1 604-679-3718"}
                            
                            </a>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </section>
    )
}

export default Contact;
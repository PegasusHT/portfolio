import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Title = ({ title }) => (
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2 className="footer-title">{title}</h2>
    </Fade>
);

export const Footer = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
    } else {
        setIsMobile(true);
        setIsDesktop(false);
    }
    }, []);

    return (
        <section id='footer'>
            <Container className='footer-container'>
              
            </Container>
        </section>
    )
}

export default Footer;
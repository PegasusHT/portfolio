import React from 'react';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {

    return (
        <section id='footer'>
            <Container>
                <span className="back-to-top">
                    <Link to="intro" smooth duration={1000}>
                        <FontAwesomeIcon icon={faAngleUp}
                         className='icons' size='5x'/>
                    </Link>
                </span>
                <br/>
                <span className='links-container'> 
                    <a href='https://www.linkedin.com/in/jimmy-bui-4302a7133/'>
                        <FontAwesomeIcon className='linkedin' 
                            icon={faLinkedin} size='4x'
                        />
                    </a>
                    <a href='https://github.com/PegasusHT'>
                        <FontAwesomeIcon className='icons'
                            icon={faGithub} size='4x'
                        />
                    </a>
                </span>
            </Container>
        </section>
    )
}

export default Footer;
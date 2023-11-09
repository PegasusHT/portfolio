import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import {Tilt} from 'react-tilt';
import React, { useEffect, useState } from 'react';
import projects from '../../../data/projects';
import eatsafe from '../../../images/eatsafe.png';
import network from '../../../images/network.png'

const imageSources = {
    eatsafe: eatsafe,
    network: network
}

const Projects = () => {

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
        <section id='project'>
            <Container>
                <Row >
                    <Title title = 'Projects'/>
                </Row>
                {projects.map((project) => {
                    const {name, description, image, liveLink, sourceLink} = project;
                    
                    return (
                        <Row className='project-rows'>
                            <ProjectInfo 
                                isDesktop={isDesktop} isMobile={isMobile} 
                                name={name} description={description}
                                liveLink={liveLink} sourceLink={sourceLink}
                            />
                            <Col lg={8} sm={12} className='image'>
                                <Fade
                                    right={isDesktop}
                                    bottom={isMobile}
                                    duration={1000}
                                    delay={1000}
                                    distance="30px"
                                >
                                <ProjectImage imageName={image}/>
                                </Fade>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        </section>
    )
}

const Title = ({ title }) => (
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2 className="projects-title">{title}</h2>
    </Fade>
);

const ProjectInfo = ({isDesktop, isMobile, name, description, liveLink, sourceLink}) => {
    return (
            <Col lg={4} sm={12} className='info-project'>
                <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                >
                    <Row>
                        <p className='title'>
                            {name}
                        </p> 
                    </Row>
                    <Row className='description'>
                        <p>{description}</p>
                    </Row>
                    <Row className='project-sources'>
                        <Col className='liveLink'>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta cta--button"
                                href={ liveLink || '#!'}
                            >
                                See Live
                            </a>
                        </Col>
                        <Col className='sourceLink'>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta name-color"
                                href={sourceLink}
                            >
                                Source Code
                            </a>
                        </Col>
                        
                    </Row>    
                </Fade>
            </Col>
    )
}

const getImageSource = (imageName) => {
    for(let source in imageSources){
        if(imageName === source) return imageSources[source]
    }
}

const ProjectImage = ({imageName}) => (
    <a
    href={'#!'}
    target="_blank"
    aria-label="Project Link"
    rel="noopener noreferrer"
    >
        <Tilt
            options={{
            reverse: false,
            max: 8,
            perspective: 1000,
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            reset: true,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
            }}
        >
            <div data-tilt className="thumbnail">
                <img src={getImageSource(imageName)} alt='project' />
            </div>
        </Tilt>
    </a>
)

export default Projects
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import React, { useState, useEffect } from 'react';

const Intro = () => {

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
      <section id='intro' className='jumbotron'>
        <div className='welcome'>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className='title'>
                Hello, my name is <span className='name-color'>Jimmy Bui</span> <br/>
                Full-Stack Developer 
              </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className='reveal'>
                <span className='cta cta--button'>
                  <Link to="about" smooth duration={1000}>
                      Know more
                  </Link>
                </span>
              </p>
          </Fade>
        </div>
      </section>
          
    )
}

export default Intro;
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import profile_pic from '../../../images/profile_horizontal.jpg'

const About = () => {
    return (
        <section id='about'>
            <Container className='about-container'>
                <Row >
                    <Title title = 'About Me'/>
                </Row>
                <Row className='row-bot'>
                    <Col className='profile-col'>
                        <div className='profile-div'>
                            <ProfilePicture />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className='div-content'>
                            <p className='content'> 
                                <p> I am recent graduate full-stack developer who
                                is passionate  
                                 about building awesome website’s and application’s! I have 
                                 currently learned and used HTML, CSS, SASS, Javascript, 
                               React. On personal level, I am self-driven & hard working, 
                                 I am able to adapt very quick and overall I am very curious.
                                Also, I am really friendly who can fit in any team. </p>
                            <br/>
                            <p> My current skills  </p>
                            <br/>
                            <p> HTML, CSS, SASS, Javascript, React, NodeJs, SQL,
                                Jest, Cucumber, Docker, GIT</p>
                            </p>
                        </div>
                        
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}
 
const Title = ({ title }) => (
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2 className="section-title">{title}</h2>
    </Fade>
);

const ProfilePicture = () => (
    <Fade left duration={1000} delay={300} distance='10px'>
        <img src={profile_pic} className='profile_pic' alt='profile picture' />
    </Fade> 
)

export default About;
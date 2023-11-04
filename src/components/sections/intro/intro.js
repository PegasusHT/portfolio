import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <div id='intro'>
          <div className='container'>
            <h1 className='title'>
              Hello, I am <span class='name-color'>Jimmy Bui</span> <br/>
              Full-Stack Developer 
            </h1>
            <p className='reveal'>
              <span className='cta cta--button'>
                <Link to="about" smooth duration={1000}>
                    Know more
                </Link>
              </span>
            </p>
          </div>
        </div>
    )
}

export default Intro;
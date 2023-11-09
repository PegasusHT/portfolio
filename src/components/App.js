import './css/App.scss';
import Intro from './sections/intro/intro'
import About from './sections/about/about';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

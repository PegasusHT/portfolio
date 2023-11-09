import './css/App.scss';
import Intro from './sections/intro/intro'
import About from './sections/about/about';
import Projects from './sections/projects/Projects'

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Projects/>
    </div>
  );
}

export default App;

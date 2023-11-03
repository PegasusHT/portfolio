import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div id='intro'>
      <div className='container'>
        <h1 className='title'>
          Hello, I am <span class='name-color'>Jimmy Bui</span> <br/>
          Full-Stack Developer 
        </h1>
        <p className='reveal'>
          <span className='cta cta-button'><a>Know more</a></span>
        </p>
      </div>
    </div>
    
    
  );
}

export default App;

import Navbar from './Navbar';
import Home from './Home';
import { ReactComponent as Logo } from './icons/Malcom.svg'

import { Github, Twitter, Linkedin, Dribbble } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App dark-theme">
      <div className="top-border"></div>
      <Navbar />
      <header>
        <div className="container">
          <h1 className="title">Malcom Green</h1>
          <div className="sub-header">
            <h4>Ever-growing problem solver & software engineer</h4>
            <span></span>
            <div className="socials">
              <a href="/"><Github size={30} /></a>
              <a href="/"><Twitter size={30} /></a>
              <a href="/"><Linkedin size={30} /></a>
              <a href="/"><Dribbble size={30} /></a>
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <Home />
      </div>
      <div className="footer">
        <div className="container">
          <div className="logo">
            <Logo />
          </div>
          <hr />
          <footer>
            <p>&copy; 2022 <span>Malcom Green</span></p>
            <p>Crafted with ❤️ by Malcom</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

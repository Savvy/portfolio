import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Home from './page/Home';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App dark-theme">
      <div className="top-border"></div>
      <Navbar />
      <Header />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;

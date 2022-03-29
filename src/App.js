import logo from './logo.svg';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Buzz from './components/Buzz';
import Events from './components/Events';
import Tech from './components/Tech';
import NonTech from './components/NonTech';
import Gallery from './components/Gallery';
import MoreContent from './components/MoreContent';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buzz" element={<Buzz />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/nontech" element={<NonTech />} />
        <Route path="/morecontent" element={<MoreContent />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

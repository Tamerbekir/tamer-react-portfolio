// Bringing in route handling
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bringing in page elements
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// exporting routes to the main App along with consistent header and footer
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}


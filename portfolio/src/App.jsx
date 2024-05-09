// Bringing in route handling
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bringing in Header and Foot from index.js in components folder where Header and Foot elements are exported
import { Header, Footer } from './components'
// Bringing in all pages from index.js in pages folder where all elements are being exported
import { About, Portfolio, Contact, Resume, Error } from './pages'

//bringing bootstrap and bringing in index.css for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// exporting routes to the main App along with consistent header and footer
export default function App() {
  return (
    <>
    {/* Using imported routes and then adding which URL they will be going to and the element, which is from where it is being imported from  */}
      <BrowserRouter>
      {/* Header from components */}
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* Footer from components */}
        <Footer />
      </BrowserRouter>
    </>
  );
}


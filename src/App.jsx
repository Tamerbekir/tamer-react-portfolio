// Bringing in Header and Foot from index.js in components folder where Header and Foot elements are exported
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom';
// import { ThemeProvider } from './components/Theme/ThemeContext';
// import ThemeToggle from './components/Theme/Theme';
// import './components/Theme/theme.css'

// Returning the main HTML file, along with Header, and footer which are imported from the components folder
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    // <ThemeProvider>
      <div>
        <Header />
        <main>
          {/* <ThemeToggle /> */}
          <Outlet />
        </main>
        <Footer />
      </div>
    // </ThemeProvider>
  );
}

export default App;



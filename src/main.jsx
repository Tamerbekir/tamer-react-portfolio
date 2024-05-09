//importing React components
import ReactDOM from 'react-dom/client'

// Bringing in route handling
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Bringing in all pages from index.js in pages folder where all elements are being exported
import { 
    About, 
    Portfolio, 
    Contact, 
    Resume, 
    Error } from './pages'

//bringing bootstrap and bringing in index.css for styling
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// exporting routes to the main App along with consistent header and footer

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: 
        [
            { index: true, element: <About /> },
            { path: '/portfolio', element: <Portfolio /> },
            { path: '/contact', element: <Contact /> },
            { path: '/resume', element: <Resume /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);

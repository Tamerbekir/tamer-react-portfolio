//importing React components
// Bringing in route handling
// Bringing in all pages from index.js in pages folder where all elements are being exported
//bringing bootstrap and bringing in index.css for styling
// exporting routes to the main App along with consistent header and footer
import App from './App'
import ReactDOM from 'react-dom/client'
import emailjs from '@emailjs/browser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import { Home, Error } from './pages/pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// using for emailing service
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: 
        [
            { index: true, element: <Home /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);

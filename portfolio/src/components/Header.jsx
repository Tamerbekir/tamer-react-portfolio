// Using NavLink so the user can redirection between the links in the header
import { NavLink } from 'react-router-dom';

// This will stay consistent throughout the page. When the user clicks on a link it will redirect them to the applicable page
// The isActive function will help determine what page the user is on using Tannery operator
export default function Header() {
    return (
        <div className='text-center header'>
        <nav>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
        </nav>
        </div>
    );
}


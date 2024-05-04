// Using NavLink so the user can redirection between the links in the header
import { NavLink } from 'react-router-dom';

// This will stay consistent throughout the page. When the user clicks on a link it will redirect them to the applicable page
export default function Header() {
    return (
        <nav>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
        </nav>
    );
}


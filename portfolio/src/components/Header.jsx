import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header d-flex align-items-center' style={{ width: '100%' }}>
            <nav className="d-flex justify-content-between w-100">
                <ul className='navName list-unstyled d-flex'>
                    <li>
                        <a href="http://www.github.com/tamerbekir">Tamer Bekir</a>
                    </li>
                </ul>
                <div className="nav-links">
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                    <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
                </div>
            </nav>
        </div>
    );
}

// Using NavLink so the user can redirection between the links in the header
import { NavLink } from 'react-router-dom';
//bringing in resume from assets folder to use as a downloadable link for Resume page
import resume from '../assets/futureresume.pdf'

// This will stay consistent throughout the page. When the user clicks on a link it will redirect them to the applicable page
// The isActive function will help determine what page the user is on using Tannery operator
export default function Header() {
    return (
        <div className='header'>
            <nav>
                {/* main title (my name) of portfolio that also has user GitHub attached */}
                <ul className='navName'>
                    <li>
                        <a href="http://www.github.com/tamerbekir">Tamer Bekir</a>
                    </li>
                </ul>
                {/* Navigational links  */}
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : 'nav-link'} >About Me</NavLink>
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : 'nav-link'}>Portfolio</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : 'nav-link'}>Contact</NavLink>
                {/* NavLink to downloadable resume */}
                <NavLink to={ resume } target="_blank" download>Resume</NavLink>
            </nav>
        </div>
    );
}

// Using NavLink so the user can redirect between the links in the header
// Using NavLink also helps keep links active when clicking on them/currently on the page
import { NavLink } from 'react-router-dom';
//bringing in resume from assets folder to use as a downloadable link for Resume page
import resume from '../assets/futureresume.pdf'

// This will stay consistent throughout the page. When the user clicks on a link it will redirect them to the applicable page.

// All elements here are exported to the App.jsx where it is rendered with the main HTML
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
                <NavLink to="/">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {/* NavLink to downloadable resume */}
                <NavLink to={ resume } target="_blank" download>Resume</NavLink>
            </nav>
        </div>
    );
}


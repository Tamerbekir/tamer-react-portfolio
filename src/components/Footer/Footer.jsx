// Footer that stays consistent throughout the page...and... 
// ...made with a lot of love :)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaReact } from "react-icons/fa";


//importing icons from Font Awesome and using icons for footer and links
import { faGithub, faInstagram, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="text-center footer">
            <ul className="text-center foot-ul">
                <li className="text- center footer-list">
                    <a className="github" href="http://www.github.com/tamerbekir"><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="stackOverFlow" href="https://stackoverflow.com/users/22620932/tam"><FontAwesomeIcon icon={faStackOverflow} /></a>
                    <a className='linkedIn' href="https://www.linkedin.com/in/tamer-b-53815035/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className='instagram' href="https://www.instagram.com/keplertam/"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
            </ul>
            <p>Created with 💙 by Tamer Bekir...and a little bit of <FaReact style={{ color: 'teal', fontSize: '20px'}} /> </p>
        </footer>
    );
}


import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaFileDownload } from 'react-icons/fa';
import resume from '../../assets/tamerBekirResume2024.pdf';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <ul className='navName'>
          <li>
            <a className="navTitle" href="http://www.github.com/tamerbekir">Tamer Bekir</a>
          </li>
        </ul>
        <NavLink className="aboutLink" onClick={() => window.location.href = "#about"}>
          <FaHome className="navIcon" /> <span className="navText">about</span>
        </NavLink>
        <NavLink className="portfolioLink" onClick={() => window.location.href = "#portfolio"}>
          <FaFolderOpen className="navIcon" /> <span className="navText">portfolio</span>
        </NavLink>
        <NavLink className="contactLink" onClick={() => window.location.href = "#contact"}>
          <FaUser className="navIcon" /> <span className="navText">contact</span>
        </NavLink>
        <NavLink to={resume} target="_blank" download>
          <FaFileDownload className="navIcon" /> <span className="navText">download resume</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Header
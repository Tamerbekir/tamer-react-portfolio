// Exporting Resume function and JSX to be rendered
import resumeFile from '../../assets/futureresume.pdf'
import { FaDownload } from "react-icons/fa";

import './resume.css'
const Resume = () => {
    return (
        <div className="text-center resume resumeDiv">
            {/* <h1 id="resume">Resume</h1>
            {/* <p>This is the Resume section.</p> */}
            <p className='resumeText' >Feel free to download my complete resume here.</p>
            <a className="resumeDownloadText" href={resumeFile} download="Resume.pdf"><FaDownload style={{ fontSize: '30px', marginTop: '2%' }}  /></a>
        </div>
    );
}

export default Resume



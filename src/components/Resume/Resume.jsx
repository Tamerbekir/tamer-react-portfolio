// Exporting Resume function and JSX to be rendered
import resumeFile from '../../assets/futureresume.pdf'
import './resume.css'
const Resume = () => {
    return (
        <div className="text-center resume resumeDiv">
            <h1 id="resume">Resume</h1>
            {/* <p>This is the Resume section.</p> */}
            <a className="resumeDownloadText" href={resumeFile} download="Resume.pdf">Download Resume</a>
        </div>
    );
}

export default Resume



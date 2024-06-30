// Exporting About function and JSX to be rendered
import headShot from '../../assets/headshot.png'
import { Portfolio, Contact, Resume } from '../components'
 
 export default function Home() {
    return (
        <div className="text-center about">
            <h1 className='aboutMeHeader'id='about'>welcome! <p className='emojiWave' >👋</p> </h1> 
                <img src={ headShot } className="img-aboutMe" alt="Headshot" />
            <p className='aboutMeText' >Hello there! I am Tamer, a full-stack web developer from Westchester, NY. I have a big passion for crafting new and exciting web experiences. I enjoy connecting both technology and creativity together to create something new and innovative. 
            <br />
            <br />
            I am a recent graduated from Columbia University BootCamp for Software Engineering, where I developed my skills and delved deep into the world of full-stack web development. With these skills I was able to build sleek user interfaces to robust backend systems- such as creating applications using Computer Science Applied to JavaScript Databases (MySQL, MongoDB), Server Side Development (MERN Stack, Progressive Web Applications), Browser-Based Technologies (React, HTML5, CSS, JavaScript, jQuery, Bootstrap), Deployment/Command-Line Fundamentals (Heroku, Git), API Interaction (API, JSON, AJAX) and Quality Assurance (Unit Testing, Linting, Continuous Integration).
            <br />
            <br />
            Feel free to browse my portfolio, check out my projects, repositories and social handles below. Be sure to download my resume for more professional information. Lastly, make sure to contact me below!</p>
            <>
        <Resume />
        </>
        <>
        <Portfolio />
        </>
        <>
        <Contact />
        </>
        </div>
    );
}

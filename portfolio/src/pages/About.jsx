// Exporting About function and JSX to be rendered
 import headShot from '../assets/headshot.png'
 
 export default function About() {
    return (
        <div className="text-center about">
            <h1>About Me</h1>
                <img src={ headShot } className="img-aboutMe" alt="Headshot" />
            <p>This is the about me section.</p>
        </div>
    );
}

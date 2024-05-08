import projectOne from '../assets/placeholder.jpeg';
import techBlogImg from '../assets/techBlog.jpeg';
import weatherAppImg from '../assets/weatherDashboard.jpeg'
import quizAppImg from '../assets/metsCodeQuick.jpeg'

export default function Portfolio() {
    return (
        <div className="container text-center portfolio">
            <h1 className='portfolioHeader'>Portfolio</h1>
            <p>This is the portfolio section.</p>
            <div className="row"> {/* Start of first row */}
                <div className="col-md-4 mb-4"> {/* Each card takes up 4 columns */}
                    <div className="card">
                        <a href="https://www.example.com">
                            <img src={techBlogImg} className="card-img-top img-portfolio" alt="tech-blog-photo" /></a>
                        <div className="card-body">
                            <h5 className="card-title">Tech Blog</h5>
                            <p className="card-text">A website designed with a database to take in new and existing users that can create blogs and discuss the latest tech!</p>
                            <a href="https://github.com/Tamerbekir/Tamer-Model-View-Controller-MVC-Tech-Blog">GitHub Repo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <a href="https://tamerbekir.github.io/tamers-weather-dashboard/">
                            <img src={weatherAppImg} className="card-img-top" alt="Placeholder" /> </a>
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Check the weather near you!</p>
                            <a href="https://github.com/Tamerbekir/tamer-mets-quiz">GitHub Repo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <a href="https://tamerbekir.github.io/tamer-mets-quiz/">
                            <img src={quizAppImg} className="card-img-top" alt="Placeholder" /> </a>
                        <div className="card-body">
                            <h5 className="card-title">Mets Code Quiz</h5>
                            <p className="card-text">Take a short quiz and test your baseball knowledge!</p>
                            <a href="https://github.com/Tamerbekir/tamer-mets-quiz">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div> {/* End of first row */}
            <div className="row"> {/* Start of second row */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={projectOne} className="card-img-top" alt="Placeholder" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={projectOne} className="card-img-top" alt="Placeholder" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={projectOne} className="card-img-top" alt="Placeholder" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://github.com/Tamerbekir/tamer-react-portfolio">Portfolio-React GitHub Repo</a>                 
        </div>
    );
}

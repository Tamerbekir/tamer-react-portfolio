import techBlogImg from '../assets/techBlog.jpeg';
import weatherAppImg from '../assets/weatherDashboard.jpeg'
import quizAppImg from '../assets/metsCodeQuick.jpeg'
import ecommerceBackEndimg from '../assets/ecommerceBackEnd.jpeg'
import sqlEmployeeTrackerimg from '../assets/sqlEmployeeTracker.jpeg'
import noSqlSocialApiImg from '../assets/noSqlSocialApiImg.jpeg'

import { projectDefault } from '../components/Form/formHandler';

export default function Portfolio() {
    return (
        <div className="container text-center portfolio">
            <h1 className='portfolioHeader'>Portfolio</h1>
            <p>This is the portfolio section.</p>
            <div className="row"> {/* Start of first row */}
                <div className="col-md-4 mb-4"> {/* Each card takes up 4 columns */}
                    <div className="card" >
                        <a href="https://tamers-techblog-7d9d9db3bd10.herokuapp.com/">
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
                            <p className="card-text">This application uses a Weather API from OpenWeather that allows a user to check weather around the world.  </p>
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
                            <p className="card-text">Take a short quiz and test your baseball knowledge using HTML, CSS and Javascript with local storage!</p>
                            <a href="https://github.com/Tamerbekir/tamer-mets-quiz">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div> {/* End of first row */}
            <div className="row"> {/* Start of second row */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={ecommerceBackEndimg} onClick={projectDefault} className="card-img-top" alt="Placeholder" />
                        <div className="card-body">
                            <h5 className="card-title">ORM eCommerce</h5>
                            <p className="card-text">This application is the back end of an eCommerce that utilizes Sequelize for Object-Relational Mapping (ORM).</p>
                            <a href="https://github.com/Tamerbekir/tamer-orm-ecommerce-back-end">GitHub Repo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={sqlEmployeeTrackerimg} onClick={projectDefault} className="card-img-top" alt="Placeholder" />
                        <div className="card-body">
                            <h5 className="card-title">SQL Employee Tracker</h5>
                            <p className="card-text">This application allows a company to keep track of their employees, their roles/titles, their departments, as well as their salaries and managers using MySQL.</p>
                            <a href="https://github.com/Tamerbekir/tamer-sql-employee-tracker">GitHub Repo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={noSqlSocialApiImg} onClick={projectDefault} className="card-img-top" alt="Placeholder" />
                        <div className="card-body">
                            <h5 className="card-title">NoSQL Social Network API</h5>
                                <p className="card-text">This application is the backend of a social networking API using NoSQL.</p>
                            <a href="https://github.com/Tamerbekir/Tamer-NoSQL-Social-Network-API">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://github.com/Tamerbekir/tamer-react-portfolio">Portfolio-React GitHub Repo</a>
        </div>
    );
}

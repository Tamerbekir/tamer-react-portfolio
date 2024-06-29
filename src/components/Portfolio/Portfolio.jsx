import {
  techBlogImg,
  weatherAppImg,
  quizAppImg,
  ecommerceBackEndimg,
  sqlEmployeeTrackerimg,
  noSqlSocialApiImg,
  instructifyImg,
  activeEatsImg,
  pennyWiseImg,
  projectDefault
} from '../'


const Portfolio = () => {
  return (
    <div className="container text-center portfolio">
      <h1 className='portfolioHeader' id='portfolio'>portfolio</h1>
      <p className='portfolioText'>Welcome to the portfolio showcase! Here, you will discover a collection of my latest projects. From web applications that deal with APIs, databases, back-end applications and much more. Each project represents a journey of creativity, problem-solving, and innovation. Feel free to view the web application or Git Repository that showcase my skills, passion, and the diverse range of projects I have had the privilege to work on.
      </p>
      <h3>Independent Projects</h3>
      <div className="row"> {/* Start of first row */}
        <div className="col-md-4 mb-4"> {/* Each card takes up 4 columns */}
          <div className="card">
            <a href="https://tamers-techblog-7d9d9db3bd10.herokuapp.com/">
              <img src={techBlogImg} className="card-img-top img-portfolio" alt="tech-blog-photo" />
            </a>
            <div className="card-body">
            <button className="card-button" onClick={() => window.location.href = 'https://tamers-techblog-7d9d9db3bd10.herokuapp.com/'}>View Link</button>
              <h5 className="card-title">Tech Blog</h5>
              <p className="card-text projectText">This application is designed with a database to take in new and existing users that can create blogs and discuss the latest tech!</p>
              <a href="https://github.com/Tamerbekir/Tamer-Model-View-Controller-MVC-Tech-Blog">GitHub Repo</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://tamerbekir.github.io/tamers-weather-dashboard/">
              <img src={weatherAppImg} className="card-img-top" alt="Placeholder" />
            </a>
            <div className="card-body">
            <button className="card-button" onClick={() => window.location.href = 'https://tamerbekir.github.io/tamers-weather-dashboard/'}>View Link</button>
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text projectText">This application uses a Weather API from OpenWeather that allows a user to check weather around the world.</p>
              <a href="https://github.com/Tamerbekir/tamer-mets-quiz">GitHub Repo</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://tamerbekir.github.io/tamer-mets-quiz/">
              <img src={quizAppImg} className="card-img-top" alt="Placeholder" />
            </a>
            <div className="card-body">
            <button className="card-button" onClick={() => window.location.href = 'https://tamerbekir.github.io/tamer-mets-quiz/'}>View Link</button>
              <h5 className="card-title">Mets Code Quiz</h5>
              <p className="card-text projectText">Take a short quiz and test your baseball knowledge using HTML, CSS and Javascript with local storage!</p>
              <a href="https://github.com/Tamerbekir/tamer-mets-quiz">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div> {/* End of first row */}
      <h3>Group Projects</h3>
      <div className="row"> {/* Start of second row */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://tamer-instructify.onrender.com/">
              <img src={instructifyImg} className="card-img-top" alt="Placeholder" />
            </a>
            <div className="card-body">
            <button className="card-button" onClick={() => window.location.href = 'https://tamer-instructify.onrender.com/'}>View Link</button>
              <h5 className="card-title">Instructify</h5>
              <p className="card-text projectText">A website designed using MERN (Mongoose, Express, React and Node.js). Users can create accounts, post tutorials that can be about anything. Users have the ability to interact with their accounts, other posts and users.</p>
              <a href="https://github.com/Tamerbekir/tamer-instructify">GitHub Repo</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://tamerbekir.github.io/active-eats/">
              <img src={activeEatsImg} className="card-img-top" alt="Placeholder" />
            </a>
            <div className="card-body">
            <button className="card-button" onClick={() => window.location.href = 'https://tamerbekir.github.io/active-eats/'}>View Link</button>
              <h5 className="card-title">Active Eats</h5>
              <p className="card-text projectText">This application uses HTML, CSS and javascript as well as multiple API handling. Users can look up recipes and workouts and save them on the go!.</p>
              <a href="https://github.com/Tamerbekir/active-eats?tab=readme-ov-file">GitHub Repo</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://pennywise-tam-a332fe023a06.herokuapp.com/">
              <img src={pennyWiseImg} className="card-img-top" alt="Placeholder" />
            </a>
            <div className="card-body">
            <button className="card-button" onClick={() => window.location.href = 'https://pennywise-tam-a332fe023a06.herokuapp.com/'}>View Link</button>
              <h5 className="card-title">Penny Wise</h5>
              <p className="card-text projectText">This application is designed up help users budget their money in real time.</p>
              <a href="https://github.com/Tamerbekir/Tamer-NoSQL-Social-Network-API">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <h3>Backend Projects</h3>
      <div className="row"> {/* Start of second row */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={ecommerceBackEndimg} onClick={projectDefault} className="card-img-top" alt="Placeholder" />
            <div className="card-body">
            <button className="card-button" onClick={() => window.location.href = 'https://github.com/Tamerbekir/tamer-orm-ecommerce-back-end'}>View Repo</button>
              <h5 className="card-title">ORM eCommerce</h5>
              <p className="card-text projectText">This application is the back end of an eCommerce that utilizes Sequelize for Object-Relational Mapping (ORM).</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={sqlEmployeeTrackerimg} onClick={projectDefault} className="card-img-top" alt="Placeholder" />
            <div className="card-body">
            <button className="card-button" onClick={() => window.location.href = 'https://github.com/Tamerbekir/tamer-sql-employee-tracker'}>View Repo</button>
              <h5 className="card-title">SQL Employee Tracker</h5>
              <p className="card-text projectText">This application allows a company to keep track of their employees, their roles/titles, their departments, as well as their salaries and managers using MySQL.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={noSqlSocialApiImg} onClick={projectDefault} className="card-img-top" alt="Placeholder" />
            <button className="card-button" onClick={() => window.location.href = 'https://github.com/Tamerbekir/Tamer-NoSQL-Social-Network-API'}>View Repo</button>
            <div className="card-body">
              <h5 className="card-title">NoSQL Social Network API</h5>
              <p className="card-text projectText">This application is the backend of a social networking API using NoSQL.</p>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/Tamerbekir/tamer-react-portfolio">Portfolio-React GitHub Repo</a>
    </div>
  );
}

export default Portfolio
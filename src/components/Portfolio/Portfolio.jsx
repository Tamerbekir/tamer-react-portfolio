import {
  techBlogImg,
  weatherAppImg,
  quizAppImg,
  ecommerceBackEndimg,
  sqlEmployeeTrackerimg,
  noSqlSocialApiImg,
  instructifyImg,
  activeEatsImg,
  pennyWiseImg
} from '../';

import ExpandCard from '../ExapandToggle/ExpandToggle'

import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="container text-center portfolio">
      <h1 className='portfolioHeader' id='portfolio'>Portfolio</h1>
      <p className='portfolioText'>Welcome to the portfolio showcase! Here, you will discover a collection of my latest projects. From web applications that deal with APIs, databases, back-end applications and much more. Each project represents a journey of creativity, problem-solving, and innovation. Feel free to view the web application or Git Repository that showcase my skills, passion, and the diverse range of projects I have had the privilege to work on.
      </p>
      <h3>Projects</h3>
      <p>*please note some applications may take additional time loading due to shared servers.</p>
      <div className="row">
        <ExpandCard
          imgSrc={techBlogImg}
          title="Tech Blog"
          text="This application is designed with HTML5, Handlebars, CSS, Javascript, Node.js and Express."
          link="https://tamers-techblog-7d9d9db3bd10.herokuapp.com/"
          repoLink="https://github.com/Tamerbekir/Tamer-Model-View-Controller-MVC-Tech-Blog"
        />
        <ExpandCard
          imgSrc={weatherAppImg}
          title="Weather Dashboard"
          text="This application uses a HTML5, CSS, Javascript and Weather API from OpenWeather."
          link="https://tamerbekir.github.io/tamers-weather-dashboard/"
          repoLink="https://github.com/Tamerbekir/tamer-mets-quiz"
        />
        <ExpandCard
          imgSrc={quizAppImg}
          title="Mets Code Quiz"
          text="This application uses HTML5, CSS and Javascript."
          link="https://tamerbekir.github.io/tamer-mets-quiz/"
          repoLink="https://github.com/Tamerbekir/tamer-mets-quiz"
        />
      </div>
      <h3>Team Projects</h3>
      <div className="row">
        <ExpandCard
          imgSrc={instructifyImg}
          title="Instructify"
          text="A website designed using HTML5, CSS, Javascript along with MERN (Mongoose, Express, React and Node.js)."
          link="https://tamer-instructify.onrender.com/"
          repoLink="https://github.com/Tamerbekir/tamer-instructify"
        />
        <ExpandCard
          imgSrc={activeEatsImg}
          title="Active Eats"
          text="This application uses HTML5, CSS and Javascript as well as multiple API handling."
          link="https://tamerbekir.github.io/active-eats/"
          repoLink="https://github.com/Tamerbekir/active-eats?tab=readme-ov-file"
        />
        <ExpandCard
          imgSrc={pennyWiseImg}
          title="Penny Wise"
          text="This application is designed with HTML5, CSS, Javascript, restFUL API, Handlebars, Node.js and Express."
          link="https://pennywise-tam-a332fe023a06.herokuapp.com/"
          repoLink="https://github.com/Tamerbekir/Tamer-NoSQL-Social-Network-API"
        />
      </div>
      <h3>Backend Projects</h3>
      <div className="row">
        <ExpandCard
          imgSrc={ecommerceBackEndimg}
          title="ORM eCommerce"
          text="This application is the back end of an eCommerce that utilizes Sequelize for Object-Relational Mapping (ORM)."
          repoLink="https://github.com/Tamerbekir/tamer-orm-ecommerce-back-end"
        />
        <ExpandCard
          imgSrc={sqlEmployeeTrackerimg}
          title="SQL Employee Tracker"
          text="This application allows a company to keep track of their employees, their roles/titles, their departments, as well as their salaries and managers using MySQL."
          repoLink="https://github.com/Tamerbekir/tamer-sql-employee-tracker"
        />
        <ExpandCard
          imgSrc={noSqlSocialApiImg}
          title="NoSQL Social Network API"
          text="This application is the backend of a social networking API using NoSQL."
          repoLink="https://github.com/Tamerbekir/Tamer-NoSQL-Social-Network-API"
        />
      </div>
      <a href="https://github.com/Tamerbekir">See all repos</a>
    </div>
  );
}

export default Portfolio;

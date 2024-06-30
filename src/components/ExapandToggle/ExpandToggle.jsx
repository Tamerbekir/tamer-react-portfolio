// ExpandCard.js
import { useState } from 'react';
import './expandCard.css'; // Make sure to have necessary styles


const ExpandCard = ({ imgSrc, title, text, link, repoLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className={`card ${isExpanded ? 'expanded' : ''}`}>
        <img src={imgSrc} className="card-img-top img-portfolio" alt={title} />
        <div className="card-body">
          <button className="card-button" onClick={toggleExpand}>
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          {isExpanded && (
            <>
              <h5 className="card-title">{title}</h5>
              <p className="card-text projectText">{text}</p>
              {link && <a href={link} className="card-link">View Link</a>}
              <br />
              <br />  
              {repoLink && <a href={repoLink} className="card-link">View GitHub Repo</a>}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandCard;

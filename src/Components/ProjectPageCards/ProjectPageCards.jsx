import React from 'react';
import './ProjectPageCards.css';
import TCW from '../../Assets/ProjectImages/TCW.png';
import Arrow from '../../Assets/arrow.svg';

function ProjectPageCards() {
  return (
    <div>
      <div className="individual-project">
        <div className="project-image-container">
          <img src={TCW} alt="TCW project card" className="project-image" />
        </div>
        <div className="project-text">
          <div className="project-name">TransCanWork</div>
          <div>WEB APPLICATION</div>
          <div className="project-description">
            An interactive employment roadmap for the 501(c)(3) nonprofit
            TransCanWork, aiding transgender, gender-nonconforming and
            intersex job seekers in their job search.
          </div>
          <div className="view-project-arrow">
            <div className="view-project">VIEW PROJECT</div>
            <div className="arrow-projects"><img src={Arrow} alt="right-pointing arrow" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPageCards;

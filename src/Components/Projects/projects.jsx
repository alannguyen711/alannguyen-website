import React from 'react';
import Miley from '../../Assets/miley.png';
import './projects.css';

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_fade

function Projects() {
  const projects = ['Poop', 'Your mom', 'Butt'];

  return (
    <div className="section-container">
      <div className="heading">Projects</div>
      <div className="description">These are some technical projects i did harharhar</div>
      <div className="all-cards-container">
        {projects.map((project) => (
          <div className="single-card-container">
            <img src={Miley} alt="miley pic" className="image" />
            <div className="overlay">
              <div className="card-text">{project}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

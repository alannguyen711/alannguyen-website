import React from 'react';
import './ProjectsPage.css';
import Header from '../Components/Header/Header';
import ProjectPageCards from '../Components/ProjectPageCards/ProjectPageCards';

function ProjectsPage() {
  return (
    <div>
      <Header />
      <div className="entire-projects-page-container">
        {/* <div className="name-about">PROJECTS</div> */}
        <div className="temp" />
        <ProjectPageCards />
      </div>
    </div>
  );
}

export default ProjectsPage;

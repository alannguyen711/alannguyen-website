import React from 'react';
import './ProjectsPage.css';
import Header from '../Components/Header/Header';
import ProjectPageCards from '../Components/ProjectPageCards/ProjectPageCards';
import TCW from '../Assets/ProjectImages/TCW.png';
import DopaMind from '../Assets/ProjectImages/DopaMind.png';
import SVM from '../Assets/ProjectImages/SVM.png';

function ProjectsPage() {
  const projectNames = [
    'TransCanWork',
    'DopaMind',
    'SVM Classification',
  ];
  const projectTypes = [
    'WEB APPLICATION',
    'HACKATHON PROJECT',
    'MACHINE LEARNING CLASSIFIER',
  ];
  const projectDescriptions = [
    'An interactive employment roadmap for the 501(c)(3) nonprofit TransCanWork, aiding transgender, gender-nonconforming and intersex job seekers in their job search.',
    'A comprehensive web app for students with ADHD, designed to help improve their focus and social skills by providing them with fun and engaging activities that are tailored to their unique needs.',
    'A Python program that employs a Support Vector Machine to classify mouse brain cells using single cell RNA-sequencing data.',
  ];
  const projectImages = [
    TCW,
    DopaMind,
    SVM,
  ];
  const projectRoutes = [
    '/wip',
    '/wip',
    '/wip',
  ];

  return (
    <div>
      <Header />
      <div className="entire-projects-page-container">
        <div className="temp" />
        <div className="project-list">
          {projectNames.map((projectName, index) => (
            <div>
              <ProjectPageCards
                name={projectName}
                type={projectTypes[index]}
                description={projectDescriptions[index]}
                image={projectImages[index]}
                route={projectRoutes[index]}
              />
              <div className="between-projects" />

            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;

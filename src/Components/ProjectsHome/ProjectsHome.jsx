import React from 'react';
import './ProjectsHome.css';
import Cards from '../Cards/Cards';
import TCW from '../../Assets/CardImages/TCW.png';
import DopaMind from '../../Assets/CardImages/dopamind.png';
import JSB from '../../Assets/CardImages/jsb.png';
import MentorSEAS from '../../Assets/CardImages/mentorSEAS.png';

function ProjectsHome() {
  const names = [
    'TransCanWork',
    'DopaMind',
    'SVM Classification',
    'MentorSEAS',
  ];
  const descriptions = [
    'WEB APPLICATION',
    'HACKATHON PROJECT',
    'MACHINE LEARNING CLASSIFIER',
    'SORTING ALGORITHM',
  ];
  const images = [
    TCW,
    DopaMind,
    JSB,
    MentorSEAS,
  ];
  const routes = [
    '/tcw',
    '/wip',
    '/wip',
    '/wip',
  ];
  return (
    <div className="entire-projects">
      {names.map((name, index) => (
        <Cards
          image={images[index]}
          name={name}
          description={descriptions[index]}
          route={routes[index]}
        />
      ))}
    </div>
  );
}

export default ProjectsHome;

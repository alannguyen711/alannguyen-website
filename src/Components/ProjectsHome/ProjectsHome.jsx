import React from 'react';
import './ProjectsHome.css';
import Cards from '../Cards/Cards';
import AASC from '../../Assets/ProjectImages/aasc.png';
import TCW from '../../Assets/ProjectImages/TCW.png';
import DopaMind from '../../Assets/ProjectImages/DopaMind.png';
import JSB from '../../Assets/ProjectImages/SVM.png';

function ProjectsHome() {
  const names = [
    'TransCanWork',
    'UCLA AASC',
    'SVM Classification',
    'DopaMind',
  ];
  const descriptions = [
    'WEB APPLICATION',
    'TEXTBOOK APPLICATION',
    'MACHINE LEARNING CLASSIFIER',
    'HACKATHON PROJECT',
  ];
  const images = [
    TCW,
    AASC,
    JSB,
    DopaMind,
  ];
  const routes = [
    '/tcw',
    '/aasc',
    '/svm',
    '/dopamind',
  ];
  const details = [
    'An interactive employment roadmap for the 501(c)(3) nonprofit, aiding transgender, gender nonconforming and intersex individuals in their job search.',
    'Combining distinguished scholarship, open-access technology, and ethnic studies  to deepen public knowledge about AAPI stories into every classroom.',
    'An interactive employment roadmap for the 501(c)(3) nonprofit, aiding transgender, gender nonconforming and intersex individuals in their job search.',
    'An interactive employment roadmap for the 501(c)(3) nonprofit, aiding transgender, gender nonconforming and intersex individuals in their job search.',
  ];
  return (
    <div className="entire-projects">
      {names.map((name, index) => (
        <Cards
          image={images[index]}
          name={name}
          description={descriptions[index]}
          route={routes[index]}
          details={details[index]}
        />
      ))}
    </div>
  );
}

export default ProjectsHome;

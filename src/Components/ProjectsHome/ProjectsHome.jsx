import React from 'react';
import './ProjectsHome.css';
import Cards from '../Cards/Cards';
import AASC from '../../Assets/ProjectImages/aasc.png';
import TCW from '../../Assets/ProjectImages/TCW.png';
import DopaMind from '../../Assets/ProjectImages/DopaMind.png';
import JSB from '../../Assets/ProjectImages/SVM.png';
import BruinShare from '../../Assets/ProjectImages/bruinshare.png';

function ProjectsHome() {
  const names = [
    'TransCanWork',
    'UCLA AASC',
    'SVM Classification',
    'DopaMind',
    'Bruin Share',
  ];
  const descriptions = [
    'WEB APPLICATION',
    'TEXTBOOK APPLICATION',
    'MACHINE LEARNING CLASSIFIER',
    'HACKATHON PROJECT',
    'STUDY PLATFORM',
  ];
  const images = [
    TCW,
    AASC,
    JSB,
    DopaMind,
    BruinShare,
  ];
  const routes = [
    '/tcw',
    '/aasc',
    '/svm',
    '/dopamind',
    '/bruinshare',
  ];
  const details = [
    'An interactive employment roadmap for the 501(c)(3) nonprofit, aiding transgender, gender nonconforming and intersex individuals in their job search.',
    'Combining distinguished scholarship, open-access technology, and ethnic studies  to deepen public knowledge about AAPI stories into every classroom.',
    'Investigating the performance of a support vector machine classifying cells based off single-cell RNA sequencing data with varying class definitions.',
    'A study plaform speicalized for students with ADHD is designed to help improve their focus, organization, and social skills.',
    'A network for UCLA students to access and share useful academic resources amidst the Zoom-ification of college education during the COVID-19 pandemic.',
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

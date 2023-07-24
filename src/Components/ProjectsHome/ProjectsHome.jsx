import React from 'react';
import './ProjectsHome.css';
import Cards from '../Cards/Cards';
// import AASC from '../../Assets/CardImages/aasc.png';
// import TCW from '../../Assets/CardImages/TCW.png';
// import DopaMind from '../../Assets/CardImages/dopamind.png';
// import JSB from '../../Assets/CardImages/jsb.png';
// import MentorSEAS from '../../Assets/CardImages/mentorSEAS.png';
// import BruinShare from '../../Assets/CardImages/bruinshare.png';
// import GhostRacer from '../../Assets/CardImages/ghostracer.png';
import AASC from '../../Assets/ProjectImages/aasc.png';
import TCW from '../../Assets/ProjectImages/TCW.png';
import DopaMind from '../../Assets/ProjectImages/DopaMind.png';
import JSB from '../../Assets/ProjectImages/SVM.png';
import MentorSEAS from '../../Assets/ProjectImages/mentorSEAS.png';
import BruinShare from '../../Assets/ProjectImages/bruinshare.png';
import GhostRacer from '../../Assets/ProjectImages/ghostracer.png';

function ProjectsHome() {
  const names = [
    'AASC',
    'TransCanWork',
    'DopaMind',
    'SVM Classification',
    'MentorSEAS',
    'Bruin Share',
    'GhostRacer',
  ];
  const descriptions = [
    'TEXTBOOK APPLICATION',
    'WEB APPLICATION',
    'HACKATHON PROJECT',
    'MACHINE LEARNING CLASSIFIER',
    'SORTING ALGORITHM',
    'STUDY PLATFORM',
    'VIDEO GAME',
  ];
  const images = [
    AASC,
    TCW,
    DopaMind,
    JSB,
    MentorSEAS,
    BruinShare,
    GhostRacer,
  ];
  const routes = [
    '/aasc',
    '/tcw',
    '/dopamind',
    '/svm',
    '/wip',
    '/bruinshare',
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

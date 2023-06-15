import React from 'react';
import './Projects.css';
import Cards from '../Cards/Cards';
import TCW from '../../Assets/TCW.png';

function Projects() {
  const names = [
    'TransCanWork',
    'DopaMind',
    'SVM Classification',
    'MentorSEAS',
  ];
  const description = [
    'Web Application',
    'Hackathon Project',
    'Machine Learning Classifier',
    'Sorting Algorithm',
  ];
  const images = [
    TCW,
    TCW,
    TCW,
    TCW,
  ];
  return (
    <div className="entire-projects">
      {names.map((name, index) => (
        <Cards
          image={images[index]}
          name={name}
          description={description[index]}
        />
      ))}
    </div>
  );
}

export default Projects;

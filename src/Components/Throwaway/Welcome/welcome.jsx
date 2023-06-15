import React from 'react';
import Trail from '../../Assets/trail.svg';
import './welcome.css';

function Welcome() {
  const bullets = [
    'I am a third year at UCLA studying Computational and Systems Biology, with a concentration in data science',
    'I have a strong interest in web development and machine learning',
    'My favorite things to do are hike, watch movies and crochet',
  ];

  return (
    <div className="section-container">
      <div className="heading-and-bee">
        <div className="heading">Welcome</div>
        <img
          src={Trail}
          alt="bee trail"
          className="dashed-line"
        />
      </div>
      <div className="description">
        My name is
        {' '}
        <span className="yellow-text">Alan Nguyen</span>
        . Here are some things about me:
      </div>
      <ul>
        {bullets.map((bullet) => (
          <li className="bullet-content">{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default Welcome;

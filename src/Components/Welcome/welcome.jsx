import React from 'react';
import Trail from '../../Assets/trail.svg';
import './welcome.css';

function Welcome() {
  const bullets = [
    'i am a third year at UCLA studying computational and systems biology',
    'i have a strong interest in web development and machine learning',
    'my favorite things to do are hike, watch movies and crochet',
  ];

  return (
    <div className="section-container">
      <div className="heading-and-bee">
        <div className="heading">welcome</div>
        <img
          src={Trail}
          alt="bee trail"
          className="dashed-line"
        />
      </div>
      <div className="description">my name is alan nguyen. here are some things about me</div>
      <ul>
        {bullets.map((bullet) => (
          <li className="bullet-content">{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default Welcome;

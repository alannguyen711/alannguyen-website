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
    <div>
      <div className="heading-and-bee">
        <p className="heading">welcome</p>
        <img
          src={Trail}
          alt="bee trail"
          className="dashed-line"
        />
      </div>
      <p className="description">my name is alan nguyen. here are some things about me</p>
      <ul>
        {bullets.map((bullet) => (
          <li className="bullet-content">{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default Welcome;

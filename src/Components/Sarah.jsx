import React from 'react';
import './Sarah.css';
import Arrow from '../Assets/arrow.svg';
import TrailBee from '../Assets/trailBee.svg';
import TrailOnly from '../Assets/trailOnly.svg';

function Sarah() {
  return (
    <div className="entire-container-main">
      <div className="alan-line">
        <div className="location">
          <div className="la">Based in LA &</div>
          <div className="bay-area-arrow">
            <div className="bay-area">Bay Area</div>
            <img src={Arrow} alt="rightwards arrow" className="arrow" />
          </div>
        </div>
        <div className="alan">ALAN</div>
        <div>
          <img src={TrailBee} alt="bee with trail" className="trail-bee" />
        </div>
      </div>
      <div className="nguyen-line">
        <div>
          <img src={TrailOnly} alt="bee trail" className="trail-only" />
        </div>
        <div className="nguyen">NGUYEN</div>
        <div className="position-year">
          <div className="position">Software Developer</div>
          <div className="year">Senior at UCLA</div>
        </div>
      </div>
    </div>
  );
}

export default Sarah;

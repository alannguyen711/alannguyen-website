import React from 'react';
import './Alan.css';
import Arrow from '../../Assets/arrow.svg';
import TrailBee from '../../Assets/trailBee.svg';
import TrailOnly from '../../Assets/trailOnly.svg';

function Sarah() {
  return (
    <div className="entire-container-main">
      <div className="alan-line">
        <div className="location">
          <div className="la">BASED IN LA &</div>
          <div className="bay-area-arrow">
            <div className="bay-area">BAY AREA</div>
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
        {/* <div className="position-year">
          <div className="position">SOFTWARE DEVELOPER</div>
          <div className="year">UCLA SENIOR</div>
        </div> */}
        <div className="position-year">
          <div className="position">SOFTWARE DEVELOPER</div>
          <div className="clickable">
            @
            {' '}
            <a href="https://lablueprint.org/" target="_blank" className="inline" rel="noreferrer">LA BLUEPRINT</a>
          </div>
          <div className="clickable">
            &
            {' '}
            <a href="https://www.aasc.ucla.edu/" target="_blank" className="inline" rel="noreferrer">UCLA AASC</a>
          </div>
        </div>
      </div>
      <div className="grey-line" />
      <div className="below-line" />
    </div>
  );
}

export default Sarah;

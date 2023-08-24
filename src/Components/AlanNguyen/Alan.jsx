import React from 'react';
import './Alan.css';
import GreyArrow from '../../Assets/Icons/grey-arrow.svg';
import Bridge from '../../Assets/bridge.png';

function Alan() {
  return (
    <div className="entire-container-alan">
      <div className="me-stuff">
        <div className="big-name">Alan Nguyen</div>
        <div className="under-name">
          is a software developer
          <br />
          based in
          {' '}
          <span className="location">LA</span>
          {' '}
          and the
          {' '}
          <span className="location">Bay Area</span>
        </div>
        <div className="alan-positions">
          Lead Developer at
          <a href="https://transcanwork.org/about-us" className="position-tags">
            {' '}
            TransCanWork
            {' '}
            <img src={GreyArrow} alt="grey arrow" className="alan-arrow" />
          </a>
        </div>
        <div className="alan-positions">
          Frontend Engineer at
          <a href="https://www.aasc.ucla.edu/textbook/" className="position-tags">
            {' '}
            UCLA AASC
            {' '}
            <img src={GreyArrow} alt="grey arrow" className="alan-arrow" />
          </a>
        </div>
      </div>
      <div className="bridge-stuff">
        <img src={Bridge} alt="golden gate bridge" className="actual-bridge" />
      </div>
    </div>
  );
}

export default Alan;

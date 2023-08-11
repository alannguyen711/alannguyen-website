import React from 'react';
import './Alan.css';
import Name from '../../Assets/name.png';
import GreyArrow from '../../Assets/Icons/grey-arrow.svg';

function Alan() {
  return (
    <div>
      <div className="entire-container-main">
        <img src={Name} alt="Alan Nguyen, software and web developer" className="name" />
        <div className="alan-positions">
          Lead Developer at
          <a href="https://transcanwork.org/about-us" className="position-tags">
            {' '}
            TransCanWork
            {' '}
            <img src={GreyArrow} alt="grey arrow" />
          </a>
        </div>
        <div className="alan-positions">
          Frontend Engineer at
          <a href="https://transcanwork.org/about-us" className="position-tags">
            {' '}
            UCLA AASC
            {' '}
            <img src={GreyArrow} alt="grey arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Alan;

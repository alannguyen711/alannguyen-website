import React from 'react';
import './InProgress.css';
import Miley from '../../Assets/miley.png';

function InProgress() {
  return (
    <div>
      <div className="thing">i am still coding this. thank you for your patience</div>
      <img src={Miley} alt="miley" className="thing" />
    </div>
  );
}

export default InProgress;

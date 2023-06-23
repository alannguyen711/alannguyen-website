import React from 'react';
import './InProgress.css';
import Bee from '../../Assets/bee.png';

function InProgress() {
  return (
    <div>
      <div className="thing">i am still coding this, thank you for your patience</div>
      <img src={Bee} alt="bee" className="thing-image" />
    </div>
  );
}

export default InProgress;

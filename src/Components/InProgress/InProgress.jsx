import React from 'react';
import './InProgress.css';
import { Link } from 'react-router-dom';

function InProgress() {
  return (
    <div>
      <div className="thing">This page is still under construction, thank you for your patience!</div>
      {/* <img src={Bee} alt="bee" className="thing-image" /> */}
      <Link to="/" className="things">BACK TO HOME PAGE</Link>
    </div>
  );
}

export default InProgress;

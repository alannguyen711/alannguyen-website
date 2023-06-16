import React from 'react';
import './Header.css';
import alanLogo from '../../Assets/alanLogo.svg';

function Header() {
  return (
    <div className="entire-container-header">
      <div className="logo">
        <img src={alanLogo} alt="alan nguyen logo" className="alan-logo" />
      </div>
      <div className="pages">
        <div>Projects</div>
        <div>Afterhours</div>
        <div>Resume</div>
        <div>About</div>
      </div>
    </div>
  );
}

export default Header;

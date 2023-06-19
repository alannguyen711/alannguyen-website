import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import alanLogo from '../../Assets/alanLogo.svg';
import Resume from '../../Assets/AlanNguyen_Resume.pdf';

function Header() {
  return (
    <div className="entire-container-header">
      <div className="logo">
        <Link to="/"><img src={alanLogo} alt="alan nguyen logo" className="alan-logo" /></Link>
      </div>
      <div className="pages">
        <div className="page">PROJECTS</div>
        <div className="page">AFTERHOURS</div>
        <a href={Resume} target="_blank" rel="noopener noreferrer" className="page">RESUME</a>
        <Link to="/about" className="page">ABOUT</Link>
      </div>
    </div>
  );
}

export default Header;

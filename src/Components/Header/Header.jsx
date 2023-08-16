import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import alanLogo from '../../Assets/Logos/signature.png';
import GreyArrow from '../../Assets/Icons/grey-arrow.svg';
import Resume from '../../Assets/AlanNguyen_Resume.pdf';

function Header() {
  return (
    <div className="entire-container-header">
      <div className="logo">
        <Link to="/"><img src={alanLogo} alt="alan nguyen logo" className="alan-logo" /></Link>
      </div>
      <div className="pages">
        <div className="no-wrapping">
          <Link to="/projects" className="page">PROJECTS</Link>
          <img src={GreyArrow} alt="grey arrow" className="header-arrow" />
        </div>
        <div className="no-wrapping">
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="page">RESUME</a>
          <img src={GreyArrow} alt="grey arrow" />
        </div>
        <div className="no-wrapping">
          <Link to="/afterhours" className="page">AFTERHOURS</Link>
          <img src={GreyArrow} alt="grey arrow" />
        </div>
        <div className="no-wrapping">
          <Link to="/about" className="page">ABOUT</Link>
          <img src={GreyArrow} alt="grey arrow" />
        </div>
      </div>
    </div>
  );
}

export default Header;

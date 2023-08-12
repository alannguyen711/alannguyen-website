import React from 'react';
import { Link } from 'react-router-dom';
import Signature from '../../Assets/Logos/signature.png';
import Resume from '../../Assets/AlanNguyen_Resume.pdf';
import GreyArrow from '../../Assets/Icons/grey-arrow.svg';
import './Footer.css';

function Home() {
  return (
    <div className="Footer">
      <div>
        <div className="design-line">Designed and developed by Alan Nguyen</div>
        <img src={Signature} alt="signature" className="signature" />
      </div>
      <div className="footer-links">
        <div>
          <Link
            to="/projects"
            className="footer-page"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            Projects
          </Link>
          {' '}
          <img src={GreyArrow} alt="grey arrow" />
        </div>
        <div>
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="footer-page">Resume</a>
          {' '}
          <img src={GreyArrow} alt="grey arrow" />
        </div>
        <div>
          <Link
            to="/afterhours"
            className="footer-page"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            Afterhours
          </Link>
          {' '}
          <img src={GreyArrow} alt="grey arrow" />
        </div>
        <div>
          <Link
            to="/about"
            className="footer-page"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            About
          </Link>
          {' '}
          <img src={GreyArrow} alt="grey arrow" />
        </div>
      </div>
    </div>
  );
}

export default Home;

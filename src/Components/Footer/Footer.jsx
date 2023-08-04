import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hive1 from '../../Assets/Animations/beehive1.png';
import Hive2 from '../../Assets/Animations/beehive2.png';
import Signature from '../../Assets/Logos/signature.png';
import Resume from '../../Assets/AlanNguyen_Resume.pdf';
import './Footer.css';

function Home() {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame === 1 ? 2 : 1));
    }, 200);

    return () => clearInterval(animationInterval);
  }, []);
  return (
    <div className="Footer">
      <div className="footer-space" />
      <div className="grey-line-footer" />
      <div className="footer-container">
        <div className="left-footer">
          <div className="hive">
            {frame === 1 ? (
              <img src={Hive1} alt="Frame 1" className="hive" />
            ) : (
              <img src={Hive2} alt="Frame 2" className="hive" />
            )}
          </div>
          <div className="design-signature">
            <div className="design-line">Designed and developed by Alan Nguyen</div>
            <img src={Signature} alt="Alan's signature" className="signature" />
          </div>
        </div>
        <div className="footer-links">
          <Link to="/projects" className="footer-page">Projects</Link>
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="footer-page">Resume</a>
          <Link to="/afterhours" className="footer-page">Afterhours</Link>
          <Link to="/about" className="footer-page">About</Link>
        </div>
      </div>
      <div className="footer-smaller-space" />
    </div>
  );
}

export default Home;

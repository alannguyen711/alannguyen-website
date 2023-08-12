import React from 'react';
import './Afterhours.css';
import Header from '../Components/Header/Header';
import AfterhoursPicture from '../Assets/afterhours.png';
import Footer from '../Components/Footer/Footer';
// import AfterhoursPicture1 from '../Assets/afterhours.svg';

function Afterhours() {
  return (
    <div className="after-the-hours">
      <Header />
      <img src={AfterhoursPicture} alt="afterhours collage" className="afterhours-image" />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Afterhours;

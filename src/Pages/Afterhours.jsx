import React from 'react';
import './Afterhours.css';
import Header from '../Components/Header/Header';
import AfterhoursPicture from '../Assets/afterhours.png';

function Afterhours() {
  return (
    <div>
      <Header />
      <img src={AfterhoursPicture} alt="afterhours collage" className="afterhours-image" />
    </div>
  );
}

export default Afterhours;

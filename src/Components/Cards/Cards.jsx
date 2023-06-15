import React from 'react';
import './Cards.css';
import propTypes from 'prop-types';
import Arrow from '../../Assets/arrow.svg';
// import TCW from '../../Assets/TCW.png';

function Cards({ image, name, description }) {
  console.log(name);
  console.log(description);
  return (
    <div className="entire-card">
      <img src={image} alt="TCW project card" className="card-image" />
      <div className="project-arrow">
        <div>{name}</div>
        <img src={Arrow} alt="right pointing arrow" className="arrow" />
      </div>
      <div>
        {description}
      </div>
    </div>
  );
}

Cards.propTypes = {
  image: propTypes.node.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default Cards;

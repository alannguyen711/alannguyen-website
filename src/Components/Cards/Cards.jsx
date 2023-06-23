import React from 'react';
import './Cards.css';
import propTypes from 'prop-types';
import Arrow from '../../Assets/arrow.svg';

function Cards({
  image, name, description, route,
}) {
  return (
    <div>
      <a href={route} className="card-link">
        <div className="entire-card">
          <div className="arrow-container">
            <img src={image} alt="TCW project card" className="card-image" />
          </div>
          <div className="project-arrow">
            <div>{name}</div>
            <img src={Arrow} alt="right pointing arrow" className="card-arrow" />
          </div>
          <div>
            {description}
          </div>
        </div>

      </a>

    </div>

  );
}

Cards.propTypes = {
  image: propTypes.node.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  route: propTypes.string.isRequired,
};

export default Cards;

import React from 'react';
import './Cards.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Arrow from '../../Assets/arrow.svg';

function Cards({
  image, name, description, route, details,
}) {
  return (
    <>
      <div>
        <div className="projects-area">
          <div className="project-image-container">
            <img src={image} alt="project graphic" className="project-screen" />
          </div>
          <div className="home-project-text">
            <Link
              to={route}
              className="card-link"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <div>
                <div className="titular">
                  <div className="titular-words">
                    <div className="proj-name">{name}</div>
                    <div className="proj-description">{description}</div>
                  </div>
                  <div className="titular-arrow">
                    <img src={Arrow} alt="arrow" />
                  </div>
                </div>
                <div className="proj-details">{details}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {(name !== 'Bruin Share') && (<div className="grey-line-proj" />)}
      {(name === 'Bruin Share') && (<div className="grey-line-proj-last" />)}

    </>

  );
}

Cards.propTypes = {
  image: propTypes.node.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  route: propTypes.string.isRequired,
  details: propTypes.string.isRequired,
};

export default Cards;

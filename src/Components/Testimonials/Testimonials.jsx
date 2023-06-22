import React from 'react';
import './Testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import T1 from '../../Assets/TestimonialImages/T1.png';
import T2 from '../../Assets/TestimonialImages/T2.png';

function Testimonials() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={T1}
            alt="One"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={T2}
            alt="Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;

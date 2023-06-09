import React from 'react';
import './About.css';
import Header from '../Components/Header/Header';
import Honeycomb from '../Assets/honeycomb.svg';
import LinkedIn from '../Assets/Icons/linkedin.svg';
import Instagram from '../Assets/Icons/instagram.svg';
import Github from '../Assets/Icons/github.svg';

function About() {
  return (
    <div>
      <Header />
      <div className="entire-about-container">
        <div className="name-about">ALAN NGUYEN</div>
        <div className="position-about">software developer</div>
        <div className="bee-line">
          <div className="grey-line-about-top" />
          <div className="honeycomb">
            <img src={Honeycomb} alt="bee and honeycomb" className="honeycomb-image" />
          </div>
        </div>
        <div className="paragraphs-container">
          <div className="ten-percent" />
          <div className="paragraphs">
            <div>
              I believe in the power of using
              <span className="paragraphs-bold"> technology </span>
              as a vehicle to
              <span className="paragraphs-bold"> foster positive social impact</span>
              .
            </div>
            <div className="paragraph-enter" />
            <div>
              I’m currently the developer lead for the 501(c)(3) nonprofit
              <a href="https://transcanwork.org/about-us" className="a-tags"> TransCanWork </a>
              and a frontend developer for UCLA’s
              <a href="https://www.aasc.ucla.edu/" className="a-tags"> Asian American Studies Center</a>
              . I’m excited to be creating applications that uplift transgender, gender-diverse
              and intersex jobseekers and deepen the public understanding of Asian American
              and Pacific Islander lives.
            </div>
            <div className="paragraph-enter" />
            <div>
              I’m a Bay Area native, avid crocheter and Beyoncé fanatic. If I’m not at my
              computer, you’ll probably find me running on a hiking trail, dancing at a concert,
              catching the sunset on the beach or on a swing set with my headphones on.
            </div>
            {/* <div className="testimonials">TESTIMONIALS</div> */}
          </div>
          <div className="thirty-percent" />
        </div>
        <div className="grey-line-about" />
        <div className="contact-container">
          <div className="contact">CONTACT</div>
          <div className="icons-row">
            <a href="https://www.linkedin.com/in/alan-nguyen-ucla/"><img src={LinkedIn} alt="LinkedIn icon" className="icons" /></a>
            <a href="https://www.instagram.com/beyonce/"><img src={Instagram} alt="Instagram icon" className="icons" /></a>
            <a href="https://github.com/alannguyen711"><img src={Github} alt="Github icon" className="icons" /></a>
          </div>
        </div>
        <div className="paragraph-enter" />
        <div className="paragraph-enter" />
        <div className="paragraph-enter" />
      </div>
    </div>

  );
}

export default About;

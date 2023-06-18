import React from 'react';
import './About.css';
import Header from '../Components/Header/Header';
import Honeycomb from '../Assets/honeycomb.svg';

function About() {
  return (
    <div>
      <Header />
      <div className="entire-about-container">
        <div className="top-about">
          <div className="about-text">
            <div className="name-about">ALAN NGUYEN</div>
            <div className="position-about">software developer</div>
            <div className="grey-line-about-top" />
            <div className="paragraphs">
              <div>
                I believe in the power of using
                technology as a vehicle to foster positive social impact.
              </div>
              <div>
                I’m currently the developer lead for the 501(c)(3) nonprofit
                TransCanWork and a frontend developer for UCLA’s Asian American Studies Center.
                I’m excited to be creating applications that uplift transgender, gender-diverse
                and intersex jobseekers and deepen the public understanding of Asian American
                and Pacific Islander lives.
              </div>
              <div>
                I’m a Bay Area native, avid crocheter and Beyoncé fanatic. If I’m not at my
                computer, you’ll probably find me running on a hiking trail, dancing at a concert,
                catching the sunset on the beach or on a swing set with my headphones on.
              </div>
            </div>
          </div>
          <div className="honeycomb">
            <img src={Honeycomb} alt="bee and honeycomb" />
          </div>
        </div>

      </div>
    </div>

  );
}

export default About;

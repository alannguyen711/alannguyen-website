import React from 'react';
import './About.css';
import Header from '../Components/Header/Header';
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
        <div className="grey-line-about" />
        <div className="paragraphs-container">
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
              and Pacific Islander lives. I&apos;m currently in search of full-time positions in
              Software Engineering, Data Science and Technical Product Management.
            </div>
            <div className="paragraph-enter" />
            <div>
              I’m a Bay Area native, avid crocheter and Beyoncé fanatic. If I’m not at my
              computer, you’ll probably find me running on a hiking trail, dancing at a concert,
              catching the sunset on the beach or on a swing set with my headphones on.
            </div>
            <div className="paragraph-enter" />
            <div className="paragraph-enter" />
            <div className="skills-technologies">
              <div>
                <span className="bolded">SKILLS</span>
                : Python, JavaScript, HTML/CSS, C++, Java, R
              </div>
              <div>
                <span className="bolded">TECHNOLOGIES</span>
                : React, Git, Figma, Firebase, Node.js, Linux
              </div>

            </div>
          </div>
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

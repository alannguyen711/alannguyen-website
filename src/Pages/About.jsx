import React from 'react';
import './About.css';
import Header from '../Components/Header/Header';
import Name from '../Assets/Banners/about-name.png';
import LinkedIn from '../Assets/Icons/linkedin.svg';
import Instagram from '../Assets/Icons/instagram.svg';
import Github from '../Assets/Icons/github.svg';
import Skills from '../Assets/Screens/skills.png';
import Technologies from '../Assets/Screens/technologies.png';

function About() {
  return (
    <div className="about-black">
      <Header />
      <div className="entire-about-container">
        <div className="name-blue"><img src={Name} alt="Alan Nguyen" className="name-about" /></div>
        {/* <div className="position-about">committed to growth and lifelong learning</div> */}
        <div className="grey-line-about" />
        <div className="paragraphs-container">
          <div className="paragraphs">
            <div>
              As a recent UCLA graduate, I’m hungry for real-world experiences in which I can
              apply what I’ve learned from my degree and past professional roles towards the success
              of an organization.
            </div>
            <div className="paragraph-enter" />
            <div>
              I’m currently working as a Technical Solutions Engineer at
              <a href="https://www.epic.com/careeverywhere/?searchText=" className="a-tags"> Epic Systems</a>
              . I oversee the
              server configuration, security settings, and technical infrastructure of five
              hospitals to facilitate the exchange of patient data with other care centers across
              the nation and world. I spearhead strategic initiatives that further interoperability,
              focused on improving patient care and operational outcomes within the hospital system.
            </div>
            <div className="paragraph-enter" />
            <div>
              I was previously a mobile developer for the 501(c)(3) nonprofit
              <a href="https://idontmind.com/" className="a-tags"> IDONTMIND </a>
              and a frontend engineer for UCLA’s
              <a href="https://www.aasc.ucla.edu/" className="a-tags"> Asian American Studies Center</a>
              . The applications I worked on helped to inpsire conversations and
              provide education about mental health
              and deepen the public understanding of AAPI lives.
            </div>
            <div className="paragraph-enter" />
            <div>
              I am always seeking new opportunities for growth and exposure to different areas
              of technology and business. Please reach out to me at
              <a href="mailto:alannguyen711@gmail.com" className="a-tags"> alannguyen711@gmail.com</a>
              if you would like to chat!
            </div>
            <div className="paragraph-enter" />
            <div className="paragraph-enter" />
            <div className="skills-technologies">
              <div>
                <img src={Skills} alt="skills" className="skillz" />
                <br />
                Python, JavaScript, HTML/CSS, C++, Java, R
              </div>
              <br />
              <div>
                <img src={Technologies} alt="technologies" className="skillz" />
                <br />
                React, Git, Figma, Firebase, Node.js, Linux
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

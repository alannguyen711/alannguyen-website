import React from 'react';
import Header from '../Components/Header/Header';
import './BruinShare.css';
import Banner from '../Assets/ProjectImages/bruinshare.png';
import Logo from '../Assets/Logos/BruinShareLogo.png';

function BruinShare() {
  return (
    <div className="bs-black">
      <Header />
      <div className="entire-bs">
        <img src={Banner} alt="BruinShare banner" className="bs-banner" />
        <div className="project-details">
          <div className="project-basics">
            <div>
              <div className="bs-title">Bruin Share</div>
              <div className="bs-type">STUDY PLATFORM</div>
              <img src={Logo} alt="BruinShare" className="bs-logo" />
            </div>
          </div>
          <div className="top-pairs">
            <div className="top-pair">
              <div className="top-category">ROLE</div>
              <div className="top-answer">
                Software Developer
              </div>
            </div>
            <div className="top-pair">
              <div className="top-category">DURATION</div>
              <div className="top-answer">Mar 2021 - May 2021</div>
            </div>
            <div className="top-pair">
              <div className="top-category">TECHNOLOGIES</div>
              <div className="top-answer">JavaScript, HTML, CSS, MongoDB, React, Node</div>
            </div>
          </div>
        </div>
        <div className="aasc-grey-line" />
        <div className="aasc-text-section">
          <div className="aasc-section-title">OVERVIEW</div>
          <div className="paragraph-title">PROJECT SUMMARY</div>
          <div className="paragraph-content">
            In brainstorming app ideas for UCLA students amidst the COVID-19 pandemic, three other
            developers and I decided to build a virtual study platform, leaning into the
            “Zoom-ification” of the university education. Users can view, upload, download
            and share class-specific study materials.
          </div>
        </div>
        <div className="aasc-grey-line" />
        <div className="aasc-text-section">
          <div className="aasc-section-title">DETAILS</div>
          <div className="paragraph-title">TECHNOLOGIES</div>
          <div className="paragraph-content">
            The project was made using MongoDB, Express.js, React.js, and Node.js. All of our user
            and post data is stored in a MongoDB database. This project was also built with the
            React Redux and Material UI libraries. The backend of this application is deployed
            using Heroku, and the frontend is deployed using Netlify.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">FEATURES</div>
          <div className="paragraph-content">
            Users will be able to view and download all posts without creating or logging in to an
            account. In order to make posts of their own and like others&apos; posts, users can
            create an account with Bruin Share, or log in using their Google account. Each post is
            displayed on a card and is associated with certain tags. Users can locate specific
            materials with a search bar and filtering options by class subject.
          </div>
        </div>
        <div className="aasc-bottom" />
      </div>
    </div>
  );
}

export default BruinShare;

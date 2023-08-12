import React from 'react';
import Header from '../Components/Header/Header';
import './AASC.css';
import Banner from '../Assets/ProjectImages/aasc.png';
import Logo from '../Assets/Logos/AASCLogo.png';

function AASC() {
  return (
    <div className="aasc-black">
      <Header />
      <div className="entire-aasc">
        <img src={Banner} alt="DopaMind banner" className="aasc-banner" />
        <div className="project-details">
          <div className="project-basics">
            <div>
              <div className="aasc-title">UCLA AASC</div>
              <div className="aasc-type">TEXTBOOK APPLICATION</div>
              <img src={Logo} alt="UCLA AASC logo" className="aasc-logo" />
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
              <div className="top-answer">Jul 2023 - Present</div>
            </div>
            <div className="top-pair">
              <div className="top-category">TECHNOLOGIES</div>
              <div className="top-answer">JavaScript, HTML, CSS, SCSS, SASS, jQuery, AJAX</div>
            </div>
          </div>
        </div>
        <div className="aasc-grey-line" />
        <div className="aasc-text-section">
          <div className="aasc-section-title">OVERVIEW</div>
          <div className="paragraph-title">PROJECT SUMMARY</div>
          <div className="paragraph-content">
            The UCLA Asian American Studies Center’s function is to deepen research on AAPI
            populations across disciplinary and epistemic boundaries. The center is developing
            an interactive textbook application to disseminate knowledge about AAPIs to the
            scholarly community and the broader public from informed perspectives.
          </div>
        </div>
        <div className="aasc-grey-line" />
        <div className="aasc-text-section">
          <div className="aasc-section-title">DETAILS</div>
          <div className="paragraph-title">TECHNOLOGIES</div>
          <div className="paragraph-content">
            The frontend features of the application were developed using JavaScript and HTML.
            Styling was performed in SCSS so global variables could be defined and reused across
            the entire application. Mixins, variables and partials were translated into CSS
            using a SASS compiler.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">FEATURES/CONTENT</div>
          <div className="paragraph-content">
            Confidential!
          </div>
        </div>
        <div className="aasc-bottom" />
      </div>
    </div>
  );
}

export default AASC;

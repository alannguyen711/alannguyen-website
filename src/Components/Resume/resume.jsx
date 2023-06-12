import React from 'react';
import './resume.css';

function Resume() {
  const company = [
    'UCLA Asian American Studies Center',
    'TransCanWork',
    'Junction of Statistics and Biology',
    '180 Degrees Consulting',
  ];
  const position = [
    'Frontend Developer',
    'Contract Software Developer',
    'Machine Learning Research Assistant',
    'Senior Consultant',
  ];
  const date = [
    'Jul 2023 - Present',
    'Oct 2022 - Present',
    'Jan 2023 - Jun 2023',
    'Jan 2022 - Jan 2023',
  ];
  const description = [
    '10 million dollar research project oh yeah baby boom boom pow pow hey hey yeah yeah blah blah pop pop',
    '10 million dollar research project oh yeah baby boom boom pow pow hey hey yeah yeah blah blah pop pop',
    '10 million dollar research project oh yeah baby boom boom pow pow hey hey yeah yeah blah blah pop pop',
    '10 million dollar research project oh yeah baby boom boom pow pow hey hey yeah yeah blah blah pop pop',
  ];

  return (
    <div className="section-container">
      <div className="heading">Résumé</div>
      <div className="resume-items">
        {company.map((comp, index) => (
          <div className="job-block">
            <div className="first-line">
              <div className="position-details">
                <span className="employer">{comp}</span>
                ,
                {' '}
                <span className="position">{position[index]}</span>
              </div>
              <div className="date-range">
                {date[index]}
              </div>
            </div>
            <div>
              {description[index]}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Resume;

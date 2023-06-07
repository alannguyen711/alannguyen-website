import React from 'react';
import './resume.css';

function Resume() {
  const company = [
    'ucla asian american studies center',
    'transcanwork',
    'junction of statistics and biology',
  ];
  const position = [
    'frontend developer',
    'contract software developer',
    'machine learning research assistant',
  ];
  const date = [
    'jul 2023 - present',
    'oct 2022 - present',
    'jan 2023 - present',
  ];
  const description = [
    '10 million dollar research project oh yeah baby boom boom pow pow hey hey yeah yeah blah blah pop pop',
    '10 million dollar research project oh yeah baby boom boom pow pow hey hey yeah yeah blah blah pop pop',
    '10 million dollar research project oh yeah baby boom boom pow pow hey hey yeah yeah blah blah pop pop',
  ];

  return (
    <div>
      <div className="heading">résumé</div>
      <div className="resume-items">
        {company.map((comp, index) => (
          <div>
            <div className="first-line">
              <div className="position-details">
                {comp}
                ,
                {' '}
                {position[index]}
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

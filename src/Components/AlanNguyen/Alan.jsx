import React from 'react';
import './Alan.css';
import GreyArrow from '../../Assets/Icons/grey-arrow.svg';
import Bridge from '../../Assets/bridge.png';
import Epic from '../../Assets/Logos/EpicLogo.png';

function Alan() {
  return (
    <div className="entire-container-alan">
      <div className="me-stuff">
        <div className="big-name">Alan Nguyen</div>
        <div className="under-name">
          technical solutions
          <br />
          engineer @
          {' '}
          {/* <span className="location">Epic Systems</span> */}
          <img src={Epic} alt="epic logo" className="epic-logo" />
        </div>
        <div className="alan-positions">
          data science + computational systems alum @
          <a href="https://www.ucla.edu/" className="position-tags">
            {' '}
            UCLA
            {' '}
            <img src={GreyArrow} alt="grey arrow" className="alan-arrow" />
          </a>
        </div>
        <div className="alan-positions">
          Currently seeking new opportunities — let&apos;s connect!
        </div>
      </div>
      <div className="bridge-stuff">
        <img src={Bridge} alt="golden gate bridge" className="actual-bridge" />
      </div>
    </div>
    // <div className="entire-container-alan">
    //   <div className="me-stuff">
    //     <div className="big-name">Alan Nguyen</div>
    //     <div className="under-name">
    //       computational systems +
    //       <br />
    //       data science alum @
    //       {' '}
    //       <span className="location">UCLA</span>
    //     </div>
    //     <div className="alan-positions">
    //       Technical Solutions Engineer @
    //       <a href="https://www.epic.com/careeverywhere/?searchText=" className="position-tags">
    //         {' '}
    //         Epic Systems
    //         {' '}
    //         <img src={GreyArrow} alt="grey arrow" className="alan-arrow" />
    //       </a>
    //     </div>
    //     <div className="alan-positions">
    //       Currently seeking full time roles — let&apos;s connect!
    //     </div>
    //   </div>
    //   <div className="bridge-stuff">
    //     <img src={Bridge} alt="golden gate bridge" className="actual-bridge" />
    //   </div>
    // </div>
  );
}

export default Alan;

import React, { useEffect, useState } from 'react';
import './Alan.css';
import frame1 from '../../Assets/Animations/frame1.png';
import frame2 from '../../Assets/Animations/frame2.png';
import Down from '../../Assets/Icons/downArrow.svg';
// import AlanComponent from '../../Assets/alan-component.svg';
// import Arrow from '../../Assets/arrow.svg';
// import TrailBee from '../../Assets/trailBee.svg';
// import TrailOnly from '../../Assets/trailOnly.svg';
// import YellowA from '../../Assets/yellowA.svg';

function Alan() {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame === 1 ? 2 : 1));
    }, 200);

    return () => clearInterval(animationInterval);
  }, []);
  return (
    <div>
      <div className="entire-container-main">
        <div className="alan-contents">
          {frame === 1 ? (
            <img src={frame1} alt="Frame 1" className="animation-frame" />
          ) : (
            <img src={frame2} alt="Frame 2" className="animation-frame" />
          )}
        </div>
        <div className="chevron-container">
          <img src={Down} className="down-chevron" alt="down Chevron" />
        </div>
        <div className="grey-line-alan" />
      </div>
    </div>
  );
}

export default Alan;

import React from 'react';
import './name.css';

function Name() {
  const styles = {
    beeheader: {
      height: '50px',
      backgroundColor: '#D9D9D9',

    },
  };
  return (
    <div className="section-container">
      <div style={styles.beeheader}>bees flying into a beehive</div>
      <div className="name">alan nguyen</div>
    </div>
  );
}

export default Name;

import React from 'react';
import './header.css';

function Header() {
  const labels = ['me', 'welcome', 'projects', 'résumé', 'idk'];
  return (
    <div className="header-container">
      {labels.map((label) => (
        <div>
          <div className="header-labels">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default Header;

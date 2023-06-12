import React from 'react';
import './header.css';

function Header() {
  const labels = ['Me', 'Welcome', 'Projects', 'Résumé', 'Idk'];
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

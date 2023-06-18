import React from 'react';
import './Home.css';
import Alan from '../Components/AlanNguyen/Alan';
import Header from '../Components/Header/Header';
import Projects from '../Components/Projects/Projects';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Alan />
      <Projects />
      <div className="first-section" />
    </div>
  );
}

export default Home;

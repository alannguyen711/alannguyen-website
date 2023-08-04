import React from 'react';
import './Home.css';
import Alan from '../Components/AlanNguyen/Alan';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ProjectsHome from '../Components/ProjectsHome/ProjectsHome';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Alan />
      <div className="project-cards">
        <ProjectsHome />
      </div>
      <div className="first-section" />
      <Footer />
    </div>
  );
}

export default Home;

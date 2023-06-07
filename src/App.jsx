import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Name from './Components/Me/name';
import Welcome from './Components/Welcome/welcome';
import Projects from './Components/Projects/projects';
import Resume from './Components/Resume/resume';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="first-section" />
      <Name />
      <div className="section" />
      <Welcome />
      <div className="section" />
      <Projects />
      <div className="section" />
      <Resume />
      <div className="section" />
    </div>
  );
}

export default App;

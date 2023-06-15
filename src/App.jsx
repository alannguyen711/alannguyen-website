import React from 'react';
import './App.css';
import Sarah from './Components/Sarah';
import SarahHeader from './Components/SarahHeader/SarahHeader';
// import Header from './Components/Header/header';
// import Name from './Components/Me/name';
// import Welcome from './Components/Welcome/welcome';
// import Projects from './Components/Projects/projects';
// import Resume from './Components/Resume/resume';

function App() {
  return (
    <div className="App">
      <SarahHeader />
      <div className="section" />
      <Sarah />
      <div className="section" />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ProjectsPage from './Pages/ProjectsPage';
import Afterhours from './Pages/Afterhours';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Alan Nguyen';
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/afterhours" element={<Afterhours />} />
      </Routes>
    </div>
  );
}

export default App;

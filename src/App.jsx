import React, { useEffect } from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ProjectsPage from './Pages/ProjectsPage';
import Afterhours from './Pages/Afterhours';
import WIP from './Pages/WIP';
import TCW from './Pages/TCW';
import DopaMind from './Pages/DopaMind';
import SVM from './Pages/SVM';
import AASC from './Pages/AASC';
import BruinShare from './Pages/BruinShare';
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
        <Route path="/wip" element={<WIP />} />
        <Route path="/tcw" element={<TCW />} />
        <Route path="/dopamind" element={<DopaMind />} />
        <Route path="/svm" element={<SVM />} />
        <Route path="/aasc" element={<AASC />} />
        <Route path="/bruinshare" element={<BruinShare />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Professional from './pages/ProfessionalProjects'
import Solo from './pages/SoloProjects'
import VideoPlayer from './pages/VideoPlayer.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/ProfessionalWork" element={<Professional />}/>
            <Route path="/SoloWork" element={<Solo />}/>
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


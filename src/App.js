import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Professional from './pages/ProfessionalProjects'
import Solo from './pages/SoloProjects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/ProfessionalWork" element={<Professional />}/>
            <Route path="/SoloWork" element={<Solo />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

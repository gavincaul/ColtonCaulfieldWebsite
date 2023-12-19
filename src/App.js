import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

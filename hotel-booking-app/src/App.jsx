import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import About from './pages/About'; // 🔥 Import About page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/about" element={<About />} /> {/* ✅ New About route */}
      </Routes>
    </Router>
  );
}

export default App;

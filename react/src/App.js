import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Video from './components/Video';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Video />} />
    </Routes>
 
  </BrowserRouter>
  );
}

export default App;

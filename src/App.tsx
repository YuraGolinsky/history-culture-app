import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Epochs from './pages/Epochs';
import Countries from './pages/Countries'; 
import Figures from './pages/figures'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';  
import Art from './pages/Art'; // Импорт компонента Art

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epochs" element={<Epochs />} />
        <Route path="/countries" element={<Countries />} /> 
        <Route path="/figures" element={<Figures />} /> 
        <Route path="/events" element={<Events />} />
        <Route path="/art" element={<Art />} /> {/* Добавьте маршрут для страницы Art */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

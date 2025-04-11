import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/NavBar/Navbar';
import HomePage from './Component/HomePage/HomePage';
import Footer from './Component/Footer/Footer';
import WhatsApp from './Component/WhatsApp/WhatsApp';
import LacusPage from './Component/Projects/LacusPage'; // Página do Lacus
import TellusPage from './Component/Projects/TellusPage'; // Página do Tellus
// import AmazonasPage from './Component/Projects/AmazonasPage'; // Página do Amazonas
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lacus" element={<LacusPage />} />
          <Route path="/tellus" element={<TellusPage />} />
        </Routes>
        <WhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

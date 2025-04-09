import React from 'react';
import Navbar from './Component/NavBar/Navbar';
import HomePage from './Component/HomePage/HomePage';
import Footer from './Component/Footer/Footer';
import WhatsApp from './Component/WhatsApp/WhatsApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <WhatsApp />
      <Footer />
    </div>
  );
}

export default App;

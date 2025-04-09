import React from 'react';
import Navbar from './Component/NavBar/Navbar';
import HomePage from './Component/HomePage/HomePage';
import Footer from './Component/Footer/Footer'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer /> 
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

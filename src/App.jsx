import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'


function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path= "/" element={<Start />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
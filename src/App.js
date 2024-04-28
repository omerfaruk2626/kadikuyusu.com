import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Galeri from './Pages/Galeri/Galeri.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Tarim from './Pages/Tarim/Tarim.jsx';
import Hayvancilik from './Pages/Hayvancilik/Hayvancilik.jsx';
import Login from './Pages/Login/Login.jsx';
import Singup from './Pages/Singup/Singup.jsx';

function App() {
  return (
    <Router basename="/">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tarim" element={<Tarim />} />
          <Route path="/hayvancilik" element={<Hayvancilik />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

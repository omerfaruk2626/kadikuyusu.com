import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import './index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Galeri from "./Pages/Galeri/Galeri";
import Biz from "./Pages/Biz/Biz";
import Iletisim from "./Pages/Iletişim/Iletişim";
import Tarim from "./Pages/Tarim/Tarim";
import Hayvancilik from "./Pages/Hayvancilik/Hayvancilik";
import GenelDuyurular from "./Pages/GenelDuyurular/GenelDuyurular";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/biz" element={<Biz />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/duyurular/tarim" element={<Tarim />} />
        <Route path="/duyurular/hayvancilik" element={<Hayvancilik />} />
        <Route path="/duyurular/genelduyurular" element={<GenelDuyurular />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </div>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active fw-bold fs-5">ANASAYFA</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/galeri" className="nav-link active fw-bold fs-5">GALERİ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link active fw-bold fs-5">İLETİŞİM</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/tarim" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                FAALİYETLER
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/tarim">TARIM</a>
                                <a className="dropdown-item" href="/hayvancilik">HAYVANCILIK</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="single-items">
                    <a href="login" className="btn btn-outline-warning fs-6 text-black" >Oturum Aç</a>
                    <a href="/singup" class="btn btn-outline-warning fs-6 text-black" >Kaydol</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;

import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <header id="nav-wrapper">
                <nav id="nav">
                    <div className="nav left">
                        <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">Logo Here</a></h1></span>
                        <button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
                    </div>
                    <div className="nav right">
                        <Link to="/home"  className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></Link>
                        <Link to="/deshbord"  className="nav-link active"><span className="nav-link-span"><span className="u-nav">Deshbord</span></span></Link>
                        <Link to="/resentNews"  className="nav-link active"><span className="nav-link-span"><span className="u-nav">Resent News</span></span></Link>
                        <Link to="/signUp"  className="nav-link active"><span className="nav-link-span"><span className="u-nav">SignUp</span></span></Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
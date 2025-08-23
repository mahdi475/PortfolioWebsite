import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar-container">
                <h1 className="logo">My Portfolio</h1>
                <nav className="nav-links">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default TopBar;
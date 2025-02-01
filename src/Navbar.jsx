import './Navbar.css';
import React, { useState } from 'react';

export default Navbar;

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="navbar">
                <div className="logo"><a href="#" className='logo-link'>MOZILLA CLUB</a></div>

                <ul className='navbar-links'>
                    <li><a href="login">Login</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="events">Events</a></li>
                </ul>
                <div className="toggle-btn" onClick={() => {
                    setMenuOpen(!menuOpen);
                }}><i className="fa-solid fa-bars"></i></div>


            </div>
            <ul className={menuOpen ? "toggle-bar" : "no-toggle"}>
                <li><a href="projects">Projects</a></li>
                <li><a href="login">Login</a></li>
                <li><a href="about">About</a></li>
                <li><a href="events">Events</a></li>
            </ul>

        </div>


    )
}
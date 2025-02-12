import './Navbar.css'; 
import React, { useState } from 'react'; 

function Navbar() { 
    const [menuOpen, setMenuOpen] = useState(false); 
    const [dropdown, setDropdown] = useState(null); 

    const handleMouseEnter = (item) => { setDropdown(item); }; 
    const handleMouseLeave = () => { setDropdown(null); }; 

    const navbarLinks = [ 
        { href: "login", text: "Login", dropdown: ["User", "Server-Side"] }, 
        { href: "NGO", text: "NGO" }, 
        { href: "explore", text: "Volunteer", dropdown: ["Disaster Relief", "Poverty & Hunger", "Education", "Environment Conservation", "Healthcare", "Human Rights", "Disability Service", "Arts & Culture"] }, 
        { href: "profile", text: "Get Involved", dropdown: ["Donate", "Fundraising", "Internship/Jobs", "Success Stories"] }, 
    ]; 

    return ( 
        <div> 
            <div className="navbar"> 
                <div className="logo"><a href="#" className='logo-link'>Volunteer</a></div> 
                <ul className='navbar-links'> 
                    {navbarLinks.map(link => ( 
                        <li key={link.href} className={`dropdown-parent ${dropdown === link.href ? 'active' : ''}`} onMouseEnter={link.dropdown ? () => handleMouseEnter(link.href) : null} onMouseLeave={link.dropdown ? handleMouseLeave : null}> 
                            <a href={link.href}>{link.text}</a> 
                            {link.dropdown && ( 
                                <ul className="dropdown left"> 
                                    {link.dropdown.map(item => ( 
                                        <li key={item}><a href="#">{item}</a></li> 
                                    ))} 
                                </ul> 
                            )} 
                        </li> 
                    ))} 
                </ul> 
                <div className="toggle-btn" onClick={() => setMenuOpen(!menuOpen)}> 
                    <i className="fa-solid fa-bars"></i> 
                </div> 
            </div> 
            <ul className={menuOpen ? "toggle-bar active" : "toggle-bar"}> 
                {navbarLinks.map(link => ( 
                    <li key={link.href} className={`dropdown-parent ${dropdown === link.href + 'Mobile' ? 'active' : ''}`} onMouseEnter={link.dropdown ? () => handleMouseEnter(link.href + 'Mobile') : null} onMouseLeave={link.dropdown ? handleMouseLeave : null}> 
                        <a href={link.href}>{link.text}</a> 
                        {link.dropdown && ( 
                            <ul className="dropdown left"> 
                                {link.dropdown.map(item => ( 
                                    <li key={item}><a href="#">{item}</a></li> 
                                ))} 
                            </ul> 
                        )} 
                    </li> 
                ))} 
            </ul> 
        </div> 
    ); 
} 

export default Navbar;

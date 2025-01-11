import './Navbar.css';
import React,{ useState } from 'react';
export default Navbar;
function Navbar(){
    const [menuOpen,setMenuOpen]=useState(false);
   
return(
    <div>
        <div className="navbar">
        <div className="logo"><a href="#" className='logo-link'>Volunteer</a></div>
        
        <ul className='navbar-links'>
            <li><a href="login">Login</a></li>
            <li><a href="NGO" >GO</a></li>
            <li><a href="explore">Explore</a></li>
            <li><a href="profile">Profile</a></li>
        </ul>
        <div className="toggle-btn" onClick={()=>{
            setMenuOpen(!menuOpen);
        }}><i class="fa-solid fa-bars"></i></div>
    
      
    </div>
    <ul className={menuOpen?"toggle-bar":"no-toggle"}>
            <li><a>GO</a></li>
            <li><a>Login</a></li>
            <li><a>Explore</a></li>
            <li><a>Profile</a></li>
        </ul>

    </div>


   
)
}


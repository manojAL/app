import './Navbar.css'
export default Navbar;
function Navbar(){
return(
    <div className="navbar">
        <div className="logo"><a href="#" className='logo-link'>Volunteer</a></div>
        
        <ul className='navbar-links'>
            <li><a href="login">Login</a></li>
            <li><a href="NGO" >GO</a></li>
            <li><a href="explore">Explore</a></li>
            <li><a href="profile">Profile</a></li>
        </ul>
        <div className="toggle-btn" onclick="toggleMenu()"><i class="fa-solid fa-bars"></i></div>
    </div>
)
}
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}



import React, { useState } from 'react';
import './navbar1.css';
import logo from '../images/logo.jpg';
import contact from '../images/contact.jpg';
import menu from '../images/menu.jpg';

import { Link } from 'react-scroll';

// Import CareerSection component
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='carousel-container' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='jumbotron-fluid' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='services-container' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Services</Link>
                <Link activeClass='active' to='career-section' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Career</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contact} alt="" className="desktopMenuImg" />Contact Me</button>
            
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='carousel-container' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='jumbotron-fluid' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='services-container' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Services</Link>
                <Link activeClass='active' to='CareerSection' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Career</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;
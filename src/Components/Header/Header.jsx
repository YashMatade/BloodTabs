import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className='container-fluid'>
      <header>
        <nav className='topbar'>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <div className="main_logo">
              <div className="blood_bg"></div>
              <p>Blood<span>tabs</span></p>
            </div>
          </Link>

          {!isMobile && (
            <div className="header_links">
              <div className="link_wrapper">
                <p>Home</p>
                {isActive('/') && <hr className='link_line' />}
              </div>
              <div className="link_wrapper">
                <p>Blood Donor Registration</p>
                {isActive('/blood-donor-registration') && <hr />}
              </div>
              <div className="link_wrapper">
                <p>About</p>
                {isActive('/about') && <hr />}
              </div>
            </div>
          )}

          {isMobile && (
            <div className="hamburger" onClick={toggleMenu}>
            <GiHamburgerMenu fontSize={30}/>
            </div>
          )}
        </nav>
        
        {menuOpen && isMobile && (
          <div className="menu_overlay">
            <div className="overlay_links">
              <Link to={`/`} onClick={toggleMenu}>Home</Link>
              <Link to={`/blood-donor-registration`} onClick={toggleMenu}>Blood Donor Registration</Link>
              <Link to={`/about`} onClick={toggleMenu}>About</Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;

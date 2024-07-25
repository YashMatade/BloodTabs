import React from 'react';
import { useLocation,Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <div className='container-fluid'>
      <header>
        <nav className='topbar '>
          <Link to={`/`} style={{textDecoration:"none"}}>
          <div className="main_logo">
            <div className="blood_bg"></div>
            <p>Blood<span>tabs</span></p>
          </div>
          </Link>
          

          <div className="header_links">
            <div className="link_wrapper">
              <p>Home</p>
              {isActive('/') &&  <hr className='link_line'/>}
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
        </nav>
      </header>
    </div>
  )
}

export default Header;

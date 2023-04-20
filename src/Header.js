import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [isAside, setIsAside] = useState(false)

  function showMenuToggle(){
    setIsAside(prevShown => !prevShown)
  }

  return (
    <header className="Header">
      <div className='Header-section'>
        <div className="Header-logo">
          <img src="images/logo.png" alt="Logo" />
        </div>
        <nav className="Header-nav">
            <img alt='img' src='images/menu-bars.png' className='menue-bars' onClick={showMenuToggle}/>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
          </ul>
        </nav>
        <div style={{width: isAside?"160px":"0px", transition: ".4s"}} className='aside'>
          <img alt='img' src='images/x.png' className='x'  onClick={showMenuToggle}/>
          <div className='aside-nav-container'>
            <p onClick={showMenuToggle}><Link to="/">Home</Link></p>
            <p onClick={showMenuToggle}><Link to="/about">About</Link></p>
            <p onClick={showMenuToggle}><Link to="/services">Services</Link></p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
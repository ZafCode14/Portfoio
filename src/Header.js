import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [isAside, setIsAside] = useState(false)

  function showMenuToggle(){
    setIsAside(prevShown => !prevShown)
  }

  function TopLink() {
    window.scrollTo(0, 0);
  }
  return (
    <header className="Header">
      <div className='Header-section'>
        <div className="Header-logo">
          <Link onClick={TopLink} to="/"><img src="images/logo.png" alt="Logo"/></Link>
        </div>
        <nav className="Header-nav">
            <img alt='img' src='images/menu-bars.png' className='menue-bars' onClick={showMenuToggle}/>
          <ul>
              <li><Link onClick={TopLink} to="/">Home</Link></li>
              <li><Link onClick={TopLink} to="/about">About</Link></li>
              <li><Link onClick={TopLink} to="/services">Services</Link></li>
          </ul>
        </nav>
        <div style={{width: isAside?"160px":"0px", transition: ".4s"}} className='aside'>
          <img alt='img' src='images/x.png' className='x'  onClick={showMenuToggle}/>
          <div className='aside-nav-container'>
            <p onClick={showMenuToggle}><Link onClick={TopLink} to="/">Home</Link></p>
            <p onClick={showMenuToggle}><Link onClick={TopLink} to="/about">About</Link></p>
            <p onClick={showMenuToggle}><Link onClick={TopLink} to="/services">Services</Link></p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
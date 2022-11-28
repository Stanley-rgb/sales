import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import{MdClose} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
  <nav className='app_navbar'>
    <div className='app_navbar-logo'>
      <img src={images.spoon} alt="app logo" />
    </div>
    <ul className='app_navbar-links'>
      <li className='p_links'>
      <a href="#buy">Buy</a>
      </li>
      <li className='p_links'>
      <a href="#sell">Sell</a>
      </li>
      <li className='p_links'>
      <a href="#offers">Offers</a>
      </li>
      <li className='p_links'>
      <a href="#contacts">Contacts</a>
      </li>
    </ul>
    <div className='app_navbar-login'>
    <a href="#login" className='p_opensans'> Logn In / Register</a>
    </div>
    <div className='app_navbar-smallscreen'>
    <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)}/>

    {toggleMenu &&(
    <div className='app_navbar-smallscreen_overlay flex_center slide-bottom'>
      <MdClose fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)}/>
      <ul className='app_navbar-smallscreen-links'>
        <li className='p_links'>
        <a href="#buy">Buy</a>
        </li>
        <li className='p_links'>
        <a href="#sell">Sell</a>
        </li>
        <li className='p_links'>
        <a href="#offers">Offers</a>
        </li>
        <li className='p_links'>
        <a href="#contacts">Contacts</a>
        </li>
    </ul>
    </div>
    )}
    
    </div>
  </nav>
)
}
export default Navbar;

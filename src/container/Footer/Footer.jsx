import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding' id='contacts'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>sheillajuma001@gmail.com</p>
        <p className='p__opensans'>P.O.BOX 66-40606 Ugunja</p>
        <p className='p__opensans'>0745411593</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.spoon} alt="" />
        <p className='p__opensans'>Our Pleasure to serve you!!!</p>
        <img src={images.spoon} alt="" className='spoon__img' style={{marginTop:15}} />
        <div className='app__footer-links_icon'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'> Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>07:00 am - 12:30 am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Sheilla. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;

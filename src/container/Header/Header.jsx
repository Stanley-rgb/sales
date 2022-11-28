import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'; 
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='buy'>
    <div className='app__wrapper_info'>
      <SubHeading title="Wholesale Price" />
      <h1 className='app__header-h1'>Buy</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>To serve other people to the best of my knowledge and abilities and use my creative and technical skills to innovate better, efficient and effective ways</p>
      <button type='button' className='custon__buttom'>Purchase</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.headphones} alt="" />
    </div>
  </div>
);

export default Header;

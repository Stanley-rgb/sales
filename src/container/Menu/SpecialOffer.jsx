import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__header app__wrapper section__padding' id='offers'>
    <div className='app__wrapper_info'>
      <SubHeading title="Offers"/>
      <h1 className='app__header-h1'>On Offer</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>We have good offers available for both products for as low as Ksh.10.</p>
      <button type='button' className='custom__buttom'>Purchase</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.comp} alt="" />
    </div>
  </div>
);

export default SpecialMenu;

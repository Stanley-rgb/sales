import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app_aboutus app__bg flex__center section__padding' id='sell'>
    <div className='app_aboutus-overlay flex__center'>
      <img src={images.G} alt="G letter" />
    </div>
    <div className='app_aboutus-content flex__center'>
      <div className='app_aboutus-content_about'>
        <SubHeading title='Electronics'/>
        <h1 className='headtext_cormorant'>Order Now</h1>
        <p className='p_opensans'>We sell goods at arfordable prices. Serving you is what we do best. Buy now and get to enjoyour products. We deal with all kinds of goods and for elevtronics we offer atleast 5 years warranty for any gadget. </p>
        <button type='button' className='custom_button'>Order</button>
      </div>
      <div className='app_aboutus_content_knife flex__center'>
        <img src={images.knife} alt="" />
      </div>
      <div className='app_aboutus-content_history'>
      <SubHeading title='Foodstuffs'/>
        <h1 className='headtext_cormorant'>Place Order</h1>
        <p className='p_opensans'>Get the taste of our delicious yam! Yam! food, place your order kill your hunger. We do home delivery all you need is to prepare yours jaws and relax as we serve you.</p>
        <button type='button' className='custom_button'>Order</button>
      </div>
    </div>
  </div>
);

export default AboutUs;

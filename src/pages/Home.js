import React, { useState, useEffect } from 'react';
import { Spring } from 'react-spring/renderprops';
import logo_image from '../assets/logo_image_small.png';

import { IntroLogo } from '../components/IntroLogo';
import '../styles/pages/home.scss';

export const Home = () => {
  const [showGif, setShowGif] = useState(true);

  const logoDuration = 3500;
  const animDuration = 500;

  useEffect(() => {
    setTimeout(() => {
      setShowGif(prev => !prev);
    }, (logoDuration + animDuration));
  }, [])

  return (
    <div>
    {
      showGif ? 
      <IntroLogo 
        logoDuration={logoDuration} 
        animDuration={animDuration} 
      />
      :
      <div class='logo-container'>
        <img className='main-logo' alt='' src={logo_image} />
      </div>
    }
    </div>
  )
}
//
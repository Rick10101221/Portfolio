import React, { useState, useEffect } from 'react';
import { Spring } from 'react-spring/renderprops';
import logo_image from '../assets/logo_image_small.png';
import square_gif from '../assets/square_logo.gif';
import '../styles/home.scss';

export const Home = () => {
  const [showGif, setShowGif] = useState(true);

  const logoDuration = 6000;
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
      <div className='gif-container'>
        <Spring
          from={{ transform: 'scale(1)', opacity: 1}}
          to={{ transform: 'scale(0.01)}', opacity: 0 }}
          config={{ delay: logoDuration, duration: animDuration }}
        >
          {
            props => (
              <div style={props}>
                <img className='intro-logo' alt='' src={square_gif} />
              </div>
            )
          }
        </Spring>
      </div>
      :
      <div class='logo-container'>
        <img className='main-logo' alt='' src={logo_image} />
      </div>
    }
    </div>
  )
}
//
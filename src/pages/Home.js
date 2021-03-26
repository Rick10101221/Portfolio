import React, { useState, useEffect } from 'react';
import { Spring } from 'react-spring/renderprops';

import { IntroLogo } from '../components/IntroLogo';
import { Navbar } from '../components/Navbar';
import '../styles/home.scss';

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
      // showGif ? 
      // <IntroLogo 
      //   logoDuration={logoDuration} 
      //   animDuration={animDuration} 
      // />
      // :
      <div className='container-fluid main-container'>
        <div className='row primary-bg'>
          <Navbar />
        </div>
        <div className='row intro-body'>
          <div className='col col-lg-12 col-md-8 offset-md-1 intro-text'>
            Hello! My name is Rickesh Khilnani and I am a fullstack engineer.
          </div>
        </div>
      </div>
    }
    </div>
  )
}
//
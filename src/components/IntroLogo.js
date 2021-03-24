import React from 'react';
import { Spring } from 'react-spring/renderprops';
import square_gif from '../assets/square_logo_2.gif';

export const IntroLogo = (props) => {
  const {
    logoDuration,
    animDuration
  } = props;

  return (
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
  )
}
import React from 'react';
import logo_image from '../assets/logo_image_small.png';
import '../styles/home.scss'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light primary-bg">
      <div className="container-fluid">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo03" 
          aria-controls="navbarTogglerDemo03" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img className='main-logo' alt='' src={logo_image} />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className="nav-link active" 
                aria-current="page" 
                href="/"
              >
                <div className='txt-navbar'>
                  home()
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <div className='txt-navbar'>
                  about()
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="/"
                tabindex="-1"
                aria-disabled="true"
              >
                <div className='txt-navbar'>
                  projects()
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
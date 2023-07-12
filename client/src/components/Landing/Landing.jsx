import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './landing.module.css';
import bgImage from '../../Images/bg-landing.png';
import logo from '../../Images/logo-landing.png';

export const Landing = () => {
  return (
    <div className={`imgContainer`}>
      <img
        className={`heroImg heroFullHeight`}
        src={bgImage}
        alt='dog in the background'
      />
      <div className={`heroContent`}>
        <div className={`flow textAlignCenter colorTitlesWhite`}>
          <img className={`${styles.logo}`} src={logo} alt='logo' />
          <h1 className='fsXxl'>Doggypedia</h1>
          <p className='fw500 fsXl'>¡Encuentra a tu compañero ideal!</p>
          <NavLink className={` button ${styles.buttonException}`} to={'/home'}>
            Conocer más
          </NavLink>
        </div>
      </div>
    </div>
  );
};

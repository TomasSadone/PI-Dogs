import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className='container flex flexBetween'>
        <div className={`flex ${styles.logoContainer}`}>
          <img className={styles.logo} src='/logo-navbar.svg' alt='logo' />
          <h2 className={styles.title}>Doggypedia</h2>
        </div>
        <div className='flex '>
          <NavLink
            to={'/home'}
            className={({ isActive }) =>
              isActive ? styles.activeNavlink : styles.navlink
            }
          >
            Home
          </NavLink>
          <NavLink
            to={'/post'}
            className={({ isActive }) =>
              isActive ? styles.activeNavlink : styles.navlink
            }
          >
            Post
          </NavLink>
        </div>
      </div>
    </div>
  );
};

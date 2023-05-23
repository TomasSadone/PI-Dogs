import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <div className='container'>
        <img src='' alt='logo' />
        <div>
          <NavLink to={'/home'}>Home</NavLink>
          <NavLink to={'/post'}>Post</NavLink>
        </div>
      </div>
    </div>
  );
};

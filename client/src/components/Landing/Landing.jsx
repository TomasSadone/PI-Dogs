import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div>
      <img src='' alt='dog in the background' />
      <div>
        <img src='' alt='logo' />
        <h1>Doggypedia</h1>
        <p>¡Encuentra a tu compañero ideal!</p>
        <Link to={'/home'}>Conocer más</Link>
      </div>
    </div>
  );
};

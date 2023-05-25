import React from 'react';
import styles from './error.module.css';

export const Error = () => {
  return (
    <div
      className={`${styles.errorContainer} grid placeContentCenter textAlignCenter flow`}
    >
      <h1 className=''>Lo sentimos, algo salió mal.</h1>
      <p className='colorText fw300'>
        Intenta realizar otra búsqueda o cambiar los filtros.
      </p>
    </div>
  );
};

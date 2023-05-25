import React from 'react';
import styles from './loading.module.css';

export const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

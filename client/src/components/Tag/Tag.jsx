import React from 'react';
import styles from './tag.module.css';

export const Tag = ({ temperament }) => {
  return <span className={styles.temperaments}>{temperament}</span>;
};

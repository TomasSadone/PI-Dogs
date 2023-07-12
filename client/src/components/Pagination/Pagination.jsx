import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrevPage } from '../../redux/actions';
import { setNextPage } from '../../redux/actions';
import styles from './pagination.module.css';

export const Pagination = () => {
  const { currentPage, dogPages } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClicks = (fn) => {
    dispatch(fn());
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };
  return (
    <div className={styles.pagination}>
      <button
        className='button buttonPagination'
        disabled={currentPage === 1}
        onClick={() => handleClicks(setPrevPage)}
      >
        {'<'}
      </button>
      <span>{currentPage}</span>
      <button
        className='button buttonPagination'
        disabled={currentPage === dogPages.length}
        onClick={() => handleClicks(setNextPage)}
      >
        {'>'}
      </button>
    </div>
  );
};

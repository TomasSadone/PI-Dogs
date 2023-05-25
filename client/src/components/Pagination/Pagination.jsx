import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrevPage } from '../../redux/actions';
import { setNextPage } from '../../redux/actions';
import styles from './pagination.module.css';

export const Pagination = () => {
  const { currentPage, dogPages } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className={styles.pagination}>
      <button
        className='button buttonPagination'
        disabled={currentPage === 1}
        onClick={() => dispatch(setPrevPage())}
      >
        {'<'}
      </button>
      <span>{currentPage}</span>
      <button
        className='button buttonPagination'
        disabled={currentPage === dogPages.length}
        onClick={() => dispatch(setNextPage())}
      >
        {'>'}
      </button>
    </div>
  );
};

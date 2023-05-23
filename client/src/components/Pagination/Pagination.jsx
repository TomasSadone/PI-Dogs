import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrevPage } from '../../redux/actions';
import { setNextPage } from '../../redux/actions';

export const Pagination = () => {
  const { currentPage, dogPages } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => dispatch(setPrevPage())}
      >
        {'<'}
      </button>
      <span>{currentPage}</span>
      <button
        disabled={currentPage === dogPages.length}
        onClick={() => dispatch(setNextPage())}
      >
        {'>'}
      </button>
    </div>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';
import styles from './cards.module.css';

export const Cards = ({ error, loading }) => {
  //con loading mostrar 8 loadingCards
  const { dogPages, currentPage } = useSelector((state) => state);
  return (
    <>
      {error.error && <Error />}
      {loading && <Loading />}
      {!loading && !error.error && (
        <div
          className={` mb2 gridAutoColumnsFill gridAutoColumnsItemLarge ${styles.layout}`}
        >
          {dogPages[currentPage - 1]
            ? dogPages[currentPage - 1].map((dog) => {
                return <Card key={dog.id} dog={dog} />;
              })
            : null}
        </div>
      )}
    </>
  );
};
